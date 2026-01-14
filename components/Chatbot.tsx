'use client';

import { useEffect, useState, useRef } from 'react';
import { X, MessageSquare, Minimize2, Maximize2, Send, Mic, MicOff, Phone, PhoneOff } from 'lucide-react';
import { motion } from 'framer-motion';
import { useConversation } from '@elevenlabs/react';
import { Conversation, ConversationContent, ConversationScrollButton } from '@/components/ui/conversation';
import { Message, MessageContent, MessageAvatar } from '@/components/ui/message';
import { LiveWaveform } from '@/components/ui/live-waveform';
import { Response } from '@/components/ui/response';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isStreaming?: boolean;
}

const AGENT_ID = 'agent_9801ke7xkh79f7vstsbyyjkktk41';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isMuted, setIsMuted] = useState(false);
  const mediaStreamRef = useRef<MediaStream | null>(null);

  const suggestedQuestions = [
    "Tell me about your AI experience",
    "What projects have you built?",
    "What's your tech stack?",
    "Tell me about your role at KiwiQ AI",
  ];

  // ElevenLabs conversation hook
  const conversation = useConversation({
    onConnect: () => {
      console.log('✅ Connected to ElevenLabs agent');
      const connectionMessage: ChatMessage = {
        role: 'assistant',
        content: "🎤 Voice connected! You can now speak with me or type your questions.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, connectionMessage]);
    },
    onDisconnect: () => {
      console.log('❌ Disconnected from ElevenLabs agent');
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach((t) => t.stop());
        mediaStreamRef.current = null;
      }
    },
    onMessage: (message) => {
      console.log('Message received:', message);

      if (message.source === 'ai' && message.message) {
        const aiMessage: ChatMessage = {
          role: 'assistant',
          content: message.message,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, aiMessage]);
      } else if (message.source === 'user' && message.message) {
        const userMessage: ChatMessage = {
          role: 'user',
          content: message.message,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, userMessage]);
      }
    },
    onError: (error) => {
      console.error('ElevenLabs error:', error);
      const errorMessage: ChatMessage = {
        role: 'assistant',
        content: "Sorry, I encountered an error. Please try again.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    },
    micMuted: isMuted,
  });

  useEffect(() => {
    // Add initial greeting when chatbot opens
    if (isOpen && messages.length === 0) {
      const greeting: ChatMessage = {
        role: 'assistant',
        content: "Hi! I'm Gaurav's AI assistant. Ask me about his experience, skills, or projects! You can type or use voice.",
        timestamp: new Date(),
      };
      setMessages([greeting]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    // Listen for custom event to open chat
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener('openChat', handleOpenChat);
    return () => {
      window.removeEventListener('openChat', handleOpenChat);
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach((t) => t.stop());
      }
    };
  }, []);

  const getMicStream = async () => {
    if (mediaStreamRef.current) return mediaStreamRef.current;
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaStreamRef.current = stream;
    return stream;
  };

  const startVoiceConversation = async () => {
    try {
      await getMicStream();
      await conversation.startSession({
        agentId: AGENT_ID,
        connectionType: 'webrtc',
      });
    } catch (error) {
      console.error('Error starting voice conversation:', error);
      const errorMessage: ChatMessage = {
        role: 'assistant',
        content: "Failed to start voice conversation. Please check microphone permissions.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  const endVoiceConversation = () => {
    conversation.endSession();
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((t) => t.stop());
      mediaStreamRef.current = null;
    }
  };

  const toggleVoiceCall = () => {
    const isConnected = conversation.status === 'connected' || conversation.status === 'connecting';
    if (isConnected) {
      endVoiceConversation();
    } else {
      startVoiceConversation();
    }
  };

  const isVoiceActive = conversation.status === 'connected' || conversation.status === 'connecting';

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const messageToSend = inputValue;
    setInputValue('');

    try {
      if (conversation.status !== 'connected') {
        await conversation.startSession({
          agentId: AGENT_ID,
          connectionType: 'webrtc',
        });
      }
      conversation.sendUserMessage(messageToSend);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: ChatMessage = {
        role: 'assistant',
        content: "I'm having trouble connecting. Please try again.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    setInputValue(question);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
        aria-label="Open AI Assistant"
      >
        <MessageSquare className="w-6 h-6" />
      </button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ duration: 0.2 }}
      className={`fixed z-50 transition-all ${
        isMinimized
          ? 'bottom-6 right-6 w-80'
          : 'bottom-6 right-6 w-96 h-[600px] md:w-[450px] md:h-[700px]'
      }`}
    >
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl flex flex-col h-full overflow-hidden">
        {/* Header */}
        <div className="bg-zinc-800 border-b border-zinc-700 text-white p-4 rounded-t-2xl flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
              <MessageSquare className="w-4 h-4 text-purple-400" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">AI Assistant</h3>
              <p className="text-xs text-gray-400">
                Ask about Gaurav&apos;s experience
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-1.5 hover:bg-white/10 rounded transition-colors"
              aria-label={isMinimized ? 'Maximize' : 'Minimize'}
            >
              {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 hover:bg-white/10 rounded transition-colors"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Chat Content */}
        {!isMinimized && (
          <>
            {/* Voice Waveform - Only shown when voice is active */}
            {isVoiceActive && (
              <div className="bg-zinc-950 border-b border-zinc-800 p-4 flex-shrink-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-xs text-gray-400">Voice call active</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsMuted(!isMuted)}
                    className="h-7 px-2 text-xs text-gray-400 hover:text-white"
                  >
                    {isMuted ? (
                      <>
                        <MicOff className="w-3 h-3 mr-1" /> Unmute
                      </>
                    ) : (
                      <>
                        <Mic className="w-3 h-3 mr-1" /> Mute
                      </>
                    )}
                  </Button>
                </div>
                <LiveWaveform
                  active={isVoiceActive && !isMuted}
                  height={60}
                  barWidth={3}
                  barGap={2}
                  barRadius={4}
                  mode="static"
                  fadeEdges={true}
                  fadeWidth={24}
                  sensitivity={1.5}
                  smoothingTimeConstant={0.85}
                  className="w-full"
                />
              </div>
            )}

            {/* Messages Area using Conversation component */}
            <Conversation className="flex-1 bg-black">
              <ConversationContent>
                {messages.map((msg, index) => (
                  <Message key={index} from={msg.role === 'user' ? 'user' : 'assistant'}>
                    {msg.role === 'assistant' && (
                      <MessageAvatar
                        src="/images/profile.jpeg"
                        name="GK"
                      />
                    )}
                    <MessageContent variant="contained" className={
                      msg.role === 'user'
                        ? 'bg-purple-600 text-white'
                        : 'bg-zinc-800 text-gray-200 border border-zinc-700'
                    }>
                      {msg.isStreaming ? (
                        <Response>{msg.content}</Response>
                      ) : (
                        <div>
                          <p className="text-sm whitespace-pre-line">{msg.content}</p>
                          <p className="text-xs opacity-60 mt-1">
                            {msg.timestamp.toLocaleTimeString('en-US', {
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </p>
                        </div>
                      )}
                    </MessageContent>
                    {msg.role === 'user' && (
                      <MessageAvatar
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23a855f7'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E"
                        name="You"
                      />
                    )}
                  </Message>
                ))}
              </ConversationContent>
              <ConversationScrollButton />
            </Conversation>

            {/* Suggested Questions */}
            {messages.length <= 1 && !isVoiceActive && (
              <div className="px-4 py-2 border-t border-zinc-800 bg-zinc-900/50 flex-shrink-0">
                <p className="text-xs text-gray-500 mb-2">Suggested questions:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.slice(0, 2).map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestedQuestion(question)}
                      className="text-xs px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-gray-300 rounded-full transition-colors border border-zinc-700"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area - Custom with ElevenLabs components */}
            <div className="p-3 border-t border-zinc-800 bg-zinc-900 flex-shrink-0">
              <div className="flex items-end gap-2">
                <Textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  placeholder="Type your message..."
                  className="flex-1 min-h-[44px] max-h-[120px] bg-zinc-800 border-zinc-700 text-white placeholder-gray-500 resize-none"
                  rows={1}
                />
                <div className="flex gap-2">
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim()}
                    size="icon"
                    className="bg-purple-600 hover:bg-purple-700 text-white h-[44px] w-[44px]"
                  >
                    <Send className="w-5 h-5" />
                  </Button>
                  <Button
                    onClick={toggleVoiceCall}
                    size="icon"
                    className={`h-[44px] w-[44px] ${
                      isVoiceActive
                        ? 'bg-red-600 hover:bg-red-700'
                        : 'bg-zinc-700 hover:bg-zinc-600'
                    } text-white`}
                  >
                    {isVoiceActive ? (
                      <PhoneOff className="w-5 h-5" />
                    ) : (
                      <Phone className="w-5 h-5" />
                    )}
                  </Button>
                </div>
              </div>
              {isVoiceActive && (
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Speak naturally or type to send text
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}

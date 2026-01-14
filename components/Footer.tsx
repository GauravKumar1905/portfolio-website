'use client';

import { Mail, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/GauravKumar1905',
      label: 'GitHub',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/gaurav-kumar-1616981a1/',
      label: 'LinkedIn',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:gauravkr.contact@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <footer className="bg-black border-t border-zinc-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-lg font-bold text-white mb-2">
              Gaurav Kumar
            </h3>
            <p className="text-sm text-gray-400">
              AI Product Manager • IIT Kharagpur
            </p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={link.label}
                className="p-2 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-lg text-gray-400 hover:text-white transition-all"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8">
          <p className="text-center text-sm text-gray-500">
            © {currentYear} Gaurav Kumar. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}

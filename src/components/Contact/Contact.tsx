import React from 'react';
import { Github, Twitter, Mail, Send } from 'lucide-react';

export const Contact = () => {
  const socials = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/yourusername',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/yourusername',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:your@email.com',
    },
  ];

  return (
    <section className="relative bg-gray-900 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Get in Touch</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white">
            Have questions or suggestions? We'd love to hear from you.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-xl bg-gray-800/50 p-8 backdrop-blur-sm">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 w-full rounded-lg bg-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 w-full rounded-lg bg-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 w-full rounded-lg bg-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 font-semibold text-white transition-all hover:scale-105"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </button>
            </form>
          </div>

          {/* Socials */}
          <div className="flex flex-col justify-center space-y-8">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded-lg bg-gray-800/50 p-6 transition-all hover:bg-gray-800/70"
              >
                <social.icon className="h-8 w-8 text-pink-500" />
                <span className="ml-4 text-lg font-medium text-white">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
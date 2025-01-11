import React from 'react';
import { Github, Rocket, Music, Shield, MessageSquare } from 'lucide-react';

export const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Advanced Moderation',
      description: 'Powerful tools to keep our Discord community safe and welcoming'
    },
    {
      icon: Music,
      title: 'Music Integration',
      description: 'High-quality music streaming in our voice channels'
    },
    {
      icon: MessageSquare,
      title: 'Community Features',
      description: 'Enhanced features to make our server more engaging'
    }
  ];

  return (
    <section className="relative bg-gray-900 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">About Mission Control</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white">
            Welcome to the Mission Control Discord server's command center. Control our music bot and manage server features all in one place.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl bg-gray-800/50 p-8 backdrop-blur-sm transition-all hover:bg-gray-800/70"
            >
              <feature.icon className="mb-4 h-8 w-8 text-pink-500" />
              <h3 className="mb-3 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/yourusername/mission-control"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3 font-semibold text-white transition-all hover:scale-105"
          >
            <Github className="mr-2 h-5 w-5" />
            View Source Code
          </a>
        </div>
      </div>
    </section>
  );
};
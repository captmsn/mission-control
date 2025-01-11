import React from 'react';
import { Shield } from 'lucide-react';

export const CommanderIntro = () => {
  return (
    <section className="relative py-24 bg-gray-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Shield className="mx-auto h-12 w-12 text-pink-500" />
          <h2 className="mt-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            Message from Mission Commander
          </h2>
        </div>
        
        <blockquote className="relative">
          <div className="relative z-10">
            <div className="text-xl text-gray-300 text-center italic">
              <p className="mb-4">
                "Hmph! So you've found your way to Mission Control... I-it's not like I'm excited to have new recruits or anything! 
                But since you're here, I suppose I should mention that our community has achieved some... decent results with this 
                music system. Not that I've been particularly moved by any of those moments... b-baka!"
              </p>
              <p className="mb-8">
                "Listen up! Our mission is... well, it's to give you the best music control system in the galaxy, okay? 
                We didn't spend countless hours perfecting this interface just for fun! And if you can't figure out how 
                to use it, don't come crying to me... though I guess I might help you... if I'm not too busy!"
              </p>
            </div>
            
            <div className="mt-8 flex items-center justify-center">
              <img
                className="h-16 w-16 rounded-full object-cover"
                src="/commander.jpg"
                alt="Mission Commander"
              />
              <div className="ml-4 text-left">
                <div className="text-lg font-semibold text-white">Commander Sarah Chen</div>
                <div className="text-pink-500">Mission Control Director</div>
                <div className="text-sm text-gray-400">(Not that I care what you think of my title...)</div>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-4 -left-4 text-9xl text-pink-500/10 font-serif">"</div>
          <div className="absolute -bottom-4 -right-4 text-9xl text-pink-500/10 font-serif rotate-180">"</div>
        </blockquote>
      </div>
    </section>
  );
};
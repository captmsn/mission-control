import React from 'react';
import { RocketIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source
            src="/space-video.mp4"
            type="video/mp4"
          />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center">
          <div className="mb-6 flex items-center justify-center">
            <RocketIcon className="mr-2 h-12 w-12 text-pink-500" />
          </div>
          <h1 className="mb-4 text-6xl font-bold tracking-tight text-white">
            Mission Control
          </h1>
          <p className="text-xl text-gray-200">
            Welcome to our mission. Prepare for launch.
          </p>
          <button 
            onClick={() => navigate('/dashboard')}
            className="mt-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3 font-semibold text-white transition-all hover:scale-105"
          >
            Launch Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};
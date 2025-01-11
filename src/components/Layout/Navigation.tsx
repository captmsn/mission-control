import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RocketIcon, Music, UserCircle, Shield } from 'lucide-react';

export const Navigation = () => {
  const location = useLocation();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';
  const showNav = !isHomePage || isScrolled;

  return (
    <>
      <nav 
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          showNav 
            ? 'translate-y-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800' 
            : isHomePage 
              ? '-translate-y-full'
              : 'translate-y-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center">
              <RocketIcon className="h-8 w-8 text-pink-500" />
              <span className="ml-2 text-xl font-bold text-white">
                Mission Control
              </span>
            </Link>

            <div className="flex items-center space-x-4">
              <Link
                to="/dashboard"
                className={`flex items-center rounded-lg px-3 py-2 text-sm transition-colors hover:bg-gray-800/60 ${
                  location.pathname === '/dashboard'
                    ? 'text-pink-500 bg-gray-800/60'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <Music className="mr-2 h-4 w-4" />
                Music
              </Link>
              <Link
                to="/moderation"
                className={`flex items-center rounded-lg px-3 py-2 text-sm transition-colors hover:bg-gray-800/60 ${
                  location.pathname === '/moderation'
                    ? 'text-pink-500 bg-gray-800/60'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <Shield className="mr-2 h-4 w-4" />
                Moderation
              </Link>
              <button
                onClick={() => setShowAuthModal(true)}
                className="flex items-center rounded-lg px-3 py-2 text-sm text-gray-300 transition-colors hover:bg-gray-800/60 hover:text-white"
              >
                <UserCircle className="mr-2 h-4 w-4" />
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-lg bg-gray-900 p-6 shadow-xl">
            <h2 className="mb-4 text-2xl font-bold text-white">Sign In</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 w-full rounded-lg bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 w-full rounded-lg bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="••••••••"
                />
              </div>
              <p className="text-sm text-gray-400">
                New users require manual approval to control the music bot. Please contact a server admin after signing up.
              </p>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowAuthModal(false)}
                  className="rounded-lg px-4 py-2 text-gray-300 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 font-semibold text-white transition-all hover:scale-105"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RocketIcon, Settings, UserCircle, LogOut } from 'lucide-react';

export const DashboardNavbar = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center">
            <RocketIcon className="h-8 w-8 text-pink-500" />
            <span className="ml-2 text-xl font-bold text-white">
              Mission Control
            </span>
          </Link>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-3 rounded-lg px-3 py-2 text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
              >
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&fit=crop&crop=faces"
                  alt="User"
                  className="h-8 w-8 rounded-full"
                />
                <span>John Doe</span>
              </button>

              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 rounded-lg bg-gray-800 py-2 shadow-xl">
                  <button className="flex w-full items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </button>
                  <button className="flex w-full items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
import React from 'react';
import { Navigation } from './Navigation';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <main className={isHomePage ? '' : 'pt-16'}>{children}</main>
    </div>
  );
};
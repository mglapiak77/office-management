import React from 'react';
import { ReactNode } from 'react';
import Navigation from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <Navigation />
      </header>
      <main className="flex-fill container py-4">
        {children}
      </main>
      <footer className="bg-dark text-light py-3 text-center">
        © 2025 Office Management by Glapiak Maciej
      </footer>
    </div>
  );
}

export default Layout;
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CreditCard } from 'lucide-react';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-lime-300 p-2 rounded-lg">
              <CreditCard className="w-6 h-6 text-zinc-900" />
            </div>
            <span className="text-white text-xl font-bold">Cardify</span>
          </Link>

          {/* Navigation */}
          <div className="flex space-x-4">
            <Link
              to="/"
              className="text-zinc-300 hover:text-white text-sm font-medium transition-colors px-4 py-2 rounded-lg hover:bg-zinc-800"
            >
              Login
            </Link>
            <Link
              to="/"
              className="bg-lime-300 text-zinc-900 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-lime-400 transition-colors"
            >
              Cadastro
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
import { useState } from 'react';
import { Menu, X, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/auth';
import { Button } from '../ui/Button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuthStore();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-blue-600">
            <img src="/assets/Logo.png" alt="Logo" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">
              Dashboard
            </Link>
            {isAuthenticated ? (
              <div className="relative">
                <Button
                  variant="outline"
                  className="flex items-center space-x-2"
                  onClick={() => logout()}
                >
                  <User size={18} />
                  <span>{user?.name}</span>
                </Button>
              </div>
            ) : (
              <Link to="/login">
                <Button>Sign In</Button>
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="p-6 space-y-4">
          <Link
            to="/"
            className="block text-gray-700 hover:text-blue-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className="block text-gray-700 hover:text-blue-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Dashboard
          </Link>
          {isAuthenticated ? (
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => {
                logout();
                setIsMenuOpen(false);
              }}
            >
              <User size={18} className="mr-2" />
              {user?.name}
            </Button>
          ) : (
            <Link to="/login" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full">Sign In</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
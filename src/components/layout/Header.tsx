import { useState } from 'react';
import { Menu, X, User, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/auth';
import { Button } from '../ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Language {
  code: string;
  name: string;
  nativeName: string;
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<Language>({
    code: 'en',
    name: 'English',
    nativeName: 'English'
  });
  const { isAuthenticated, user, logout } = useAuthStore();

  const languages: Language[] = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'si', name: 'Sinhala', nativeName: 'සිංහල' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' }
  ];

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-green-600">
            ගොවි නැණස
            </Link>
            <Link to="/" className="text-xl font-bold text-blue-600">
            <img src="/assets/Logo.png" alt="Logo" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-green-600">
              Home
            </Link>
            <Link to="/market" className="text-gray-700 hover:text-green-600">
              Market
            </Link>
            <Link to="/weather" className="text-gray-700 hover:text-green-600">
              Weather
            </Link>
            <Link to="/support" className="text-gray-700 hover:text-green-600">
              Support
            </Link>

            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <Globe size={18} />
                  <span>{currentLanguage.nativeName}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((language) => (
                  <DropdownMenuItem
                    key={language.code}
                    onClick={() => handleLanguageChange(language)}
                    className="flex items-center gap-2"
                  >
                    <span>{language.nativeName}</span>
                    <span className="text-gray-500 text-sm">({language.name})</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Auth Button */}
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
                <Button className="bg-green-600 hover:bg-green-700">Sign In</Button>
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
            className="block text-gray-700 hover:text-green-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/market"
            className="block text-gray-700 hover:text-green-600"
            onClick={() => setIsMenuOpen(false)}
          >
            market
          </Link>
          <Link
            to="/weather"
            className="block text-gray-700 hover:text-green-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Weather
          </Link>
          <Link
            to="/support"
            className="block text-gray-700 hover:text-green-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Support
          </Link>

          {/* Mobile Language Switcher */}
          <div className="py-2 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-2">Select Language</p>
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => {
                  handleLanguageChange(language);
                  setIsMenuOpen(false);
                }}
                className="w-full text-left py-2 px-4 hover:bg-gray-100 rounded-md flex items-center justify-between"
              >
                <span>{language.nativeName}</span>
                <span className="text-sm text-gray-500">({language.name})</span>
              </button>
            ))}
          </div>

          {/* Mobile Auth Button */}
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
              <Button className="w-full bg-green-600 hover:bg-green-700">Sign In</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
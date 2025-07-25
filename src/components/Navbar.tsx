import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = React.memo(() => {
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll state
  const [isScrolled, setIsScrolled] = useState(false);

  // Mobile menu & dropdown state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Ref for dropdown click-outside detection
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fetch college data with React Query
  const {
    data: collegeData = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['collegeNavData'],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/colleges/nav`
      );
      return response.data.map((college: { name: string; shortName: string }) => ({
        name: college.name,
        href: `/colleges/${college.shortName.toLowerCase()}`,
      }));
    },
  });

  // Auto-close dropdowns on navigation
  useEffect(() => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
  }, [location]);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Memoized NAV_ITEMS
  const NAV_ITEMS = useMemo(
    () => [
      {
        name: 'Home',
        href: '/',
      },
      {
        name: 'Our Colleges',
        href: '/colleges',
        children: collegeData,
      },
      {
        name: 'Programs & Courses',
        href: '/programs',
      },
      {
        name: 'Gallery',
        href: '/gallery',
      },
      {
        name: 'About IISD',
        href: '/about',
      },
      {
        name: 'Contact Us',
        href: '/contact',
      },
    ],
    [collegeData]
  );

  // Toggle dropdown
  const toggleDropdown = (name: string) => {
    setActiveDropdown(prev => (prev === name ? null : name));
  };

  // Navigate and close mobile menu
  const handleNavClick = (href: string) => {
    navigate(href);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300 border-b',
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent text-white'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center h-full"
            onClick={() => handleNavClick('/')}
          >
            <img
              src="favicon.ico"
              className="rounded-3xl h-full p-2"
              alt="Logo"
            />
            <div
              className={cn(
                'h-10 w-auto flex items-center font-display font-bold text-xl',
                isScrolled ? 'text-maroon-600' : 'text-white'
              )}
            >
              IISD <span className="hidden sm:inline ml-1">Institute</span>
            </div>
          </a>
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {NAV_ITEMS.map(item => (
              <div key={item.name} className="relative group" ref={item.children ? dropdownRef : undefined}>
                {item.children ? (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={cn(
                      'inline-flex items-center px-3 py-2 text-sm font-medium transition-colors',
                      isScrolled
                        ? 'text-gray-800 hover:text-maroon-600'
                        : 'text-white hover:text-gray-200'
                    )}
                  >
                    {item.name}
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform duration-200 ease-in-out ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      'px-3 py-2 text-sm font-medium transition-colors',
                      isScrolled
                        ? 'text-gray-800 hover:text-maroon-600'
                        : 'text-white hover:text-gray-200'
                    )}
                  >
                    {item.name}
                  </button>
                )}
                {item.children && (
                  <div
                    className={cn(
                      'absolute top-full left-0 w-80 py-2 bg-white/95 backdrop-blur rounded-md shadow-lg border opacity-0 invisible transform -translate-y-2 transition-all duration-200 z-50',
                      activeDropdown === item.name &&
                        'opacity-100 visible translate-y-0'
                    )}
                  >
                    {isLoading ? (
                      <div className="px-4 py-2 text-sm text-gray-500">
                        Loading...
                      </div>
                    ) : isError ? (
                      <div className="px-4 py-2 text-sm text-red-500">
                        Failed to load colleges
                      </div>
                    ) : (
                      item.children.map(child => (
                        <button
                          key={child.name}
                          onClick={() => handleNavClick(child.href)}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-maroon-50 hover:text-maroon-600"
                        >
                          {child.name}
                        </button>
                      ))
                    )}
                  </div>
                )}
              </div>
            ))}
            {/* Apply Now Button */}
            <button
              onClick={() => handleNavClick('/inquire')}
              className="inline-flex items-center px-5 py-2 text-sm font-medium text-white bg-maroon-600 rounded-md shadow-sm hover:bg-maroon-700 transition-colors"
            >
              Apply Now
            </button>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                'inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset transition-colors',
                isScrolled
                  ? 'text-gray-800 hover:text-maroon-600 hover:bg-maroon-50 focus:ring-maroon-500'
                  : 'text-white hover:text-gray-200 focus:ring-white'
              )}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden transition-all duration-300 overflow-hidden',
          isMenuOpen ? 'max-h-screen border-t bg-white/95 backdrop-blur text-gray-700' : 'max-h-0'
        )}
      >
        <div className="py-3 space-y-1 sm:px-3">
          {NAV_ITEMS.map(item => (
            <div key={item.name} ref={item.children ? dropdownRef : undefined}>
              {item.children ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="w-full flex justify-between items-center px-4 py-2 text-base font-medium transition-colors"
                  >
                    {item.name}
                    <ChevronDown
                      className={cn(
                        'ml-1 h-4 w-4 transition-transform',
                        activeDropdown === item.name && 'transform rotate-180'
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      'transition-all duration-200 overflow-hidden bg-gray-50',
                      activeDropdown === item.name ? 'max-h-96' : 'max-h-0'
                    )}
                  >
                    {isLoading ? (
                      <div className="px-8 pr-4 py-2 text-sm text-gray-500">
                        Loading...
                      </div>
                    ) : isError ? (
                      <div className="px-8 pr-4 py-2 text-sm text-red-500">
                        Failed to load colleges
                      </div>
                    ) : (
                      item.children.map(child => (
                        <button
                          key={child.name}
                          onClick={() => handleNavClick(child.href)}
                          className="block pl-8 pr-4 py-2 text-sm text-gray-700 hover:bg-maroon-50 hover:text-maroon-600"
                        >
                          {child.name}
                        </button>
                      ))
                    )}
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="block px-4 py-2 text-base font-medium transition-colors"
                >
                  {item.name}
                </button>
              )}
            </div>
          ))}
          <div className="px-4 py-3">
            <button
              onClick={() => handleNavClick('/inquire')}
              className="block w-full text-center px-5 py-2 text-base font-medium text-white bg-maroon-600 rounded-md shadow-sm hover:bg-maroon-700 transition-colors"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
});

export default Navbar;
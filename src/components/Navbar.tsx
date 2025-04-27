import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About IISD',
    href: '/about',
  },
  {
    name: 'Our Colleges',
    href: '/colleges',
    children: [
      { name: 'Chatrapati Shivaji Maharaj Paramedical & IT College', href: '/colleges/csmpic' },
      { name: 'Royal College', href: '/colleges/royal' },
      { name: 'N.H. Paramedical and IT College', href: '/colleges/nhpic' },
      { name: 'Nashik Paramedical & IT College', href: '/colleges/npic' },
      { name: 'Millat English Medium High School & Jr. College, New Nashik', href: '/colleges/memhs' },
      { name: 'Nashik Super-30 (NEET/IIT-JEE Academy)', href: '/colleges/ns30' },      
      { name: 'View All', href: '/colleges'},
    ],
  },
  {
    name: 'Programs & Courses',
    href: '/programs',
  },
  {
    name: 'Admissions',
    href: '/inquire',
  },
  {
    name: 'Student Resources',
    href: '/resources',
  },
  {
    name: 'Contact Us',
    href: '/contact',
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent text-white"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center">
              <div className={cn(
                "h-10 w-auto flex items-center font-display font-bold text-xl",
                isScrolled ? "text-maroon-600" : "text-white"
              )}>
                IISD <span className="hidden sm:inline ml-1">Institute</span>
              </div>
            </a>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={cn(
                      "inline-flex items-center px-3 py-2 text-sm font-medium transition-colors",
                      isScrolled ? "text-gray-800 hover:text-maroon-600" : "text-white hover:text-gray-200"
                    )}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 ease-in-out" />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className={cn(
                      "px-3 py-2 text-sm font-medium transition-colors",
                      isScrolled ? "text-gray-800 hover:text-maroon-600" : "text-white hover:text-gray-200"
                    )}
                  >
                    {item.name}
                  </a>
                )}

                {item.children && (
                  <div
                    className={cn(
                      "absolute top-full left-0 w-80 py-2 bg-white/95 backdrop-blur rounded-md shadow-lg border opacity-0 invisible transform -translate-y-2 transition-all duration-200 z-50",
                      activeDropdown === item.name && "opacity-100 visible translate-y-0"
                    )}
                  >
                    {item.children.map((child) => (
                      <a
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-maroon-50 hover:text-maroon-600"
                      >
                        {child.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex md:items-center">
            <a
              href="/inquire"
              className="inline-flex items-center px-5 py-2 text-sm font-medium text-white bg-maroon-600 rounded-md shadow-sm hover:bg-maroon-700 transition-colors"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                "inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset transition-colors",
                isScrolled ? "text-gray-800 hover:text-maroon-600 hover:bg-maroon-50 focus:ring-maroon-500" : "text-white hover:text-gray-200 focus:ring-white"
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

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden transition-all duration-300 overflow-hidden",
          isMenuOpen ? "max-h-screen border-t bg-white/95 backdrop-blur text-gray-700" : "max-h-0"
        )}
      >
        <div className="py-3 space-y-1 sm:px-3">
          {NAV_ITEMS.map((item) => (
            <div key={item.name}>
              {item.children ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={cn(
                      "w-full flex justify-between items-center px-4 py-2 text-base font-medium transition-colors"
                    )}
                  >
                    {item.name}
                    <ChevronDown className={cn(
                      "ml-1 h-4 w-4 transition-transform",
                      activeDropdown === item.name && "transform rotate-180"
                    )} />
                  </button>

                  <div
                    className={cn(
                      "transition-all duration-200 overflow-hidden bg-gray-50",
                      activeDropdown === item.name ? "max-h-96" : "max-h-0"
                    )}
                  >
                    {item.children.map((child) => (
                      <a
                        key={child.name}
                        href={child.href}
                        className="block pl-8 pr-4 py-2 text-sm text-gray-700 hover:bg-maroon-50 hover:text-maroon-600"
                      >
                        {child.name}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  href={item.href}
                  className={cn(
                    "block px-4 py-2 text-base font-medium transition-colors"
                  )}
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}

          <div className="px-4 py-3">
            <a
              href="/inquire"
              className="block w-full text-center px-5 py-2 text-base font-medium text-white bg-maroon-600 rounded-md shadow-sm hover:bg-maroon-700 transition-colors"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

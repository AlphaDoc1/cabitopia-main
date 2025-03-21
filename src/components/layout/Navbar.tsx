
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, CarFront } from 'lucide-react';
import { cn } from '@/lib/utils';

const NavLinks = [
  { title: 'Home', path: '/' },
  { title: 'Services', path: '/services' },
  { title: 'Places', path: '/places' },
  { title: 'Book Now', path: '/booking' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when changing routes
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-5',
        scrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-sm py-3' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-foreground"
          aria-label="Home"
        >
          <CarFront className="h-6 w-6 text-primary" />
          <span className="font-semibold text-xl tracking-tight">Glacier Way Cabs</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {NavLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'nav-link',
                location.pathname === link.path ? 'text-primary after:w-full' : ''
              )}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Book Now Button (Desktop) */}
        <div className="hidden md:block">
          <Link
            to="/booking"
            className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg transition-all duration-300 btn-hover-scale shadow-md"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-menu"
        className={cn(
          'fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-8 p-6 md:hidden transition-transform duration-300',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {NavLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={cn(
              'text-lg font-medium transition-colors duration-300',
              location.pathname === link.path ? 'text-primary' : 'text-foreground'
            )}
            onClick={() => setIsOpen(false)}
          >
            {link.title}
          </Link>
        ))}
        <Link
          to="/booking"
          className="mt-4 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md"
          onClick={() => setIsOpen(false)}
        >
          Book Now
        </Link>
      </div>
    </header>
  );
};

export default Navbar;

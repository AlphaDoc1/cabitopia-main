
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, CarFront } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cab-50 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <CarFront className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Cabitopia</h3>
            </div>
            <p className="text-muted-foreground">
              Premium cab services with a commitment to safety, comfort, and reliability.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
              <Link to="/places" className="text-muted-foreground hover:text-primary transition-colors">Places</Link>
              <Link to="/booking" className="text-muted-foreground hover:text-primary transition-colors">Book Now</Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">City Rides</Link>
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Airport Transfers</Link>
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Outstation Trips</Link>
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Corporate Travel</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">123 Business Avenue, Srinagar, Jammu and Kashmir, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+911234567890" className="text-muted-foreground hover:text-primary transition-colors">9149559393</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:info@cabitopia.com" className="text-muted-foreground hover:text-primary transition-colors">Glacierwaycabs@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {currentYear} Cabitopia. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

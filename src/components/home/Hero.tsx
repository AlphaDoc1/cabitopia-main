
import { Link } from 'react-router-dom';
import { ChevronRight, Star } from 'lucide-react';
import Container from '@/components/ui/Container';
import AnimatedSection from '../ui/AnimatedSection';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90"></div>
        <img
          src="/images/kash.jpg"
          alt="Premium cab service"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <Container className="relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection animation="fade-up" className="text-center lg:text-left space-y-6">
            <div className="inline-flex items-center space-x-1 bg-primary/10 text-primary px-4 py-1.5 rounded-full mb-4">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="text-sm font-medium">Premium Cab Service</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Luxury Travel <br />
              <span className="text-primary">Simplified</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Experience the perfect blend of comfort, reliability, and premium service with our exclusive fleet of luxury vehicles.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/booking"
                className="btn-hover-scale bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-md inline-flex items-center justify-center"
              >
                Book Now
                <ChevronRight className="h-5 w-5 ml-1" />
              </Link>
              
              <Link
                to="/services"
                className="btn-hover-scale bg-white hover:bg-white/90 text-foreground border border-border px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-md inline-flex items-center justify-center"
              >
                Explore Services
              </Link>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start mt-4 space-x-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <img
                      src="/images/bi.jpeg"
                      alt="Customer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  Trusted by 10,000+ customers
                </span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200} className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/20 to-primary/5 blur-lg"></div>
              <div className="glass-card relative rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/images/cab.jpeg"
                  alt="Luxury sedan"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white">Premium Sedan</h3>
                  <p className="text-white/90 mt-2">Experience unmatched comfort and style</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </div>
  );
};

export default Hero;

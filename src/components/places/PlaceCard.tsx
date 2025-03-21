
import { useState } from 'react';
import { MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedSection from '../ui/AnimatedSection';

interface PlaceCardProps {
  image: string;
  name: string;
  description: string;
  rating: number;
  popularDestinations: string[];
  delay?: number;
  className?: string;
}

const PlaceCard = ({
  image,
  name,
  description,
  rating,
  popularDestinations,
  delay = 0,
  className,
}: PlaceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AnimatedSection 
      animation="fade-up" 
      delay={delay}
      className={cn('group', className)}
    >
      <div
        className="relative rounded-xl overflow-hidden shadow-md transition-all duration-500 h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="aspect-[4/3] w-full overflow-hidden">
          <img
            src={image}
            alt={name}
            className={cn(
              'w-full h-full object-cover transition-transform duration-700',
              isHovered ? 'scale-110' : 'scale-100'
            )}
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold">{name}</h3>
            <div className="flex items-center space-x-1 bg-primary/70 px-2 py-1 rounded text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{rating.toFixed(1)}</span>
            </div>
          </div>
          
          <p className="text-white/80 mb-4 line-clamp-2">{description}</p>
          
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-sm text-white/80">
              <MapPin className="h-4 w-4" />
              <span>Popular destinations:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {popularDestinations.map((destination, index) => (
                <span
                  key={index}
                  className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded text-xs"
                >
                  {destination}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div
          className={cn(
            'absolute inset-0 bg-primary/10 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300',
            isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
          )}
        >
          <button className="bg-white text-foreground px-6 py-3 rounded-lg font-medium transition-transform hover:scale-105">
            Explore Destinations
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default PlaceCard;

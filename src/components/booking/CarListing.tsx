
import { useState } from 'react';
import { Check, Star, User, Luggage, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedSection from '../ui/AnimatedSection';

// Car data model
export interface Car {
  id: string;
  name: string;
  type: string;
  image: string;
  pricePerKm: number;
  seats: number;
  rating: number;
  features: string[];
}

interface CarListingProps {
  cars: Car[];
  onSelectCar: (car: Car) => void;
  selectedCarId?: string;
}

const CarListing = ({ cars, onSelectCar, selectedCarId }: CarListingProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Choose Your Vehicle</h2>
      
      <div className="grid grid-cols-1 gap-6">
        {cars.map((car, index) => (
          <AnimatedSection key={car.id} animation="fade-up" delay={index * 100}>
            <CarCard
              car={car}
              isSelected={car.id === selectedCarId}
              onSelect={() => onSelectCar(car)}
            />
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

interface CarCardProps {
  car: Car;
  isSelected: boolean;
  onSelect: () => void;
}

const CarCard = ({ car, isSelected, onSelect }: CarCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className={cn(
        'border rounded-xl overflow-hidden transition-all duration-300',
        isSelected 
          ? 'border-primary shadow-md shadow-primary/10' 
          : 'border-border hover:border-primary/50'
      )}
    >
      <div 
        className="grid grid-cols-1 md:grid-cols-3 cursor-pointer"
        onClick={onSelect}
      >
        {/* Car Image */}
        <div className="aspect-[4/3] md:aspect-auto relative">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm text-foreground text-sm px-2 py-1 rounded-md">
            {car.type}
          </div>
          {isSelected && (
            <div className="absolute top-0 right-0 p-2 bg-primary text-white">
              <Check className="h-5 w-5" />
            </div>
          )}
        </div>

        {/* Car Info */}
        <div className="p-6 flex flex-col justify-between md:col-span-2">
          <div>
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-bold">{car.name}</h3>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-medium">{car.rating.toFixed(1)}</span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{car.seats} Seats</span>
              </div>
              <div className="flex items-center space-x-2">
                <Luggage className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Luggage Space</span>
              </div>
              <div
                className="flex items-center space-x-1 text-primary cursor-pointer"
                onClick={(e) => { 
                  e.stopPropagation();
                  setShowDetails(!showDetails);
                }}
              >
                <Info className="h-4 w-4" />
                <span className="text-sm font-medium">Details</span>
              </div>
            </div>

            {showDetails && (
              <div className="mt-4 grid grid-cols-2 gap-2">
                {car.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-4 flex items-end justify-between">
            <div>
              <div className="text-2xl font-bold">₹{car.pricePerKm}/km</div>
              <div className="text-xs text-muted-foreground">Excluding taxes & fees</div>
            </div>
            <button
              className={cn(
                'px-6 py-2 rounded-lg font-medium transition-colors',
                isSelected
                  ? 'bg-primary text-white'
                  : 'bg-primary/10 text-primary hover:bg-primary/20'
              )}
              onClick={(e) => {
                e.stopPropagation();
                onSelect();
              }}
            >
              {isSelected ? 'Selected' : 'Select'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarListing;

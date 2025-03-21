
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedSection from '../ui/AnimatedSection';

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  features: string[];
  className?: string;
  reversed?: boolean;
  delay?: number;
}

const ServiceCard = ({
  image,
  title,
  description,
  features,
  className,
  reversed = false,
  delay = 0,
}: ServiceCardProps) => {
  return (
    <AnimatedSection 
      animation="fade-up"
      delay={delay}
      className={cn(
        'grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center',
        reversed && 'lg:flex-row-reverse',
        className
      )}
    >
      <div className={cn('order-1', reversed ? 'lg:order-2' : 'lg:order-1')}>
        <div className="relative rounded-xl overflow-hidden image-hover-zoom shadow-lg aspect-video">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700"
          />
        </div>
      </div>

      <div className={cn('order-2', reversed ? 'lg:order-1' : 'lg:order-2')}>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-3">
              <div className="rounded-full bg-primary/10 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-primary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <button className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors">
          Learn more
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </AnimatedSection>
  );
};

export default ServiceCard;

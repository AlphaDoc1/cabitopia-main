
import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 
    | 'fade-in'
    | 'fade-up'
    | 'slide-in-right'
    | 'slide-in-left'
    | 'blur-in';
  delay?: number;
  threshold?: number;
  once?: boolean;
}

const AnimatedSection = ({
  children,
  className,
  animation = 'fade-up',
  delay = 0,
  threshold = 0.2,
  once = true,
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [threshold, once]);

  return (
    <div
      ref={sectionRef}
      className={cn(
        'transition-all duration-700',
        {
          'opacity-0': !isVisible,
          'opacity-100': isVisible,
          'translate-y-8': !isVisible && animation === 'fade-up',
          'translate-y-0': isVisible && animation === 'fade-up',
          'translate-x-20': !isVisible && animation === 'slide-in-right',
          'translate-x-0': isVisible && animation === 'slide-in-right',
          'translate-x-[-5rem]': !isVisible && animation === 'slide-in-left',
          '-translate-x-0': isVisible && animation === 'slide-in-left',
          'blur-sm': !isVisible && animation === 'blur-in',
          'blur-0': isVisible && animation === 'blur-in',
        },
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;

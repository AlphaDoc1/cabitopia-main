
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  id?: string;
}

const Container = ({ 
  children, 
  className, 
  as: Component = 'section',  
  id,
  ...props 
}: ContainerProps) => {
  return (
    <Component
      id={id}
      className={cn('w-full px-6 mx-auto max-w-7xl', className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Container;

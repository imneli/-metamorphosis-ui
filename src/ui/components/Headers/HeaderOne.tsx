import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const headerVariants = cva(
  'w-full flex items-center justify-between px-4 transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-white border-b',
        transparent: 'bg-transparent',
        colored: 'bg-primary-500',
      },
      size: {
        sm: 'h-14',
        default: 'h-16',
        lg: 'h-20',
      },
      position: {
        fixed: 'fixed top-0 left-0 right-0 z-50',
        static: 'static',
        sticky: 'sticky top-0 z-50',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      position: 'static',
    },
  }
);

interface HeaderOneProps extends VariantProps<typeof headerVariants> {
  logo?: React.ReactNode;
  navigation?: React.ReactNode[];
  actions?: React.ReactNode[];
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  dark?: boolean;
}

const HeaderOne: React.FC<HeaderOneProps> = ({
  logo,
  navigation,
  actions,
  className,
  variant,
  size,
  position,
  maxWidth = '2xl',
  dark = false,
}) => {
  const containerClasses = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    full: 'w-full',
  };

  return (
    <header
      className={cn(
        headerVariants({ variant, size, position }),
        dark && 'bg-gray-900 text-white',
        className
      )}
    >
      <div className={cn('w-full mx-auto px-4', containerClasses[maxWidth])}>
        <div className="flex items-center justify-between h-full">

          {logo && (
            <div className="flex-shrink-0">
              {logo}
            </div>
          )}

          {navigation && navigation.length > 0 && (
            <nav className="hidden md:flex items-center space-x-4">
              {navigation.map((item, index) => (
                <div key={index} className="text-sm font-medium">
                  {item}
                </div>
              ))}
            </nav>
          )}

          {actions && actions.length > 0 && (
            <div className="flex items-center space-x-4">
              {actions.map((action, index) => (
                <div key={index}>
                  {action}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export { HeaderOne, type HeaderOneProps };
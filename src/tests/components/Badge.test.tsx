import React, { FC } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils'; 

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        solid: 'text-white',
        outline: 'border border-gray-300',
        ghost: 'text-gray-600',
        glass: 'bg-opacity-75 backdrop-blur-md text-white border-2 border-white/50',
      },
      color: {
        default: 'bg-white text-gray-800',
        black: 'bg-black text-white',
        danger: 'bg-red-600 text-white',
        success: 'bg-green-500 text-white',
        warning: 'bg-yellow-500 text-white',
        violet: 'bg-violet-400 text-white'
      },
      size: {
        sm: 'h-6 px-3 text-xs', 
        md: 'h-6 px-4 text-sm', 
        lg: 'h-8 px-5 text-base', 
      },
    },
    defaultVariants: {
      variant: 'solid',
      color: 'default',
      size: 'md',
    },
  }
);

export interface BadgeProps extends VariantProps<typeof badgeVariants> {
  children: React.ReactNode;
  className?: string;
}

const Badge: FC<BadgeProps> = ({ children, variant, color, size, className }) => {
  return (
    <span className={cn(badgeVariants({ variant, color, size }), className)}>
      {children}
    </span>
  );
};

export { Badge, badgeVariants };

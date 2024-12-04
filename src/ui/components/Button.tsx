import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        solid: '',
        outline: 'border-2',
        ghost: 'hover:bg-opacity-10',
        link: 'underline-offset-4 hover:underline',
      },
      color: {
        default: 'bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 focus-visible:ring-gray-300',
        primary: 'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500',
        secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus-visible:ring-gray-500',
        danger: 'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500',
        success: 'bg-green-600 text-white hover:bg-green-700 focus-visible:ring-green-500',
        warning: 'bg-yellow-500 text-white hover:bg-yellow-600 focus-visible:ring-yellow-400',
      },
      size: {
        xs: 'h-7 px-2 text-xs',
        sm: 'h-8 px-3 text-sm',
        md: 'h-9 px-4 text-base',
        lg: 'h-10 px-6 text-lg',
        xl: 'h-12 px-8 text-xl',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      }
    },
    defaultVariants: {
      variant: 'solid',
      color: 'default',
      size: 'md',
      fullWidth: false,
    },
  }
);

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
  VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    children,
    className,
    variant,
    color,
    size,
    fullWidth,
    loading,
    disabled,
    ...props
  }, ref) => {
    return (
      <button
        className={cn(
          buttonVariants({ 
            variant, 
            color, 
            size, 
            fullWidth 
          }),
          className
        )}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <div className="flex items-center gap-2"> 
            {children}
          </div>
        ) : children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
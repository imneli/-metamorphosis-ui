import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        solid: '',
        outline: 'border-2',
        ghost: 'hover:bg-opacity-10',
        link: 'underline-offset-4 hover:underline',
      },
      color: {
        default: '',
        primary: '',
        secondary: '',
        danger: '',
        success: '',
        warning: '',
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
      },
    },
    compoundVariants: [
      {
        variant: 'solid',
        color: 'default',
        className: 'bg-gray-900 text-white hover:bg-gray-800 focus-visible:ring-gray-700',
      },
      {
        variant: 'solid',
        color: 'primary',
        className: 'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500',
      },
      {
        variant: 'solid',
        color: 'secondary',
        className: 'bg-gray-600 text-white hover:bg-gray-700 focus-visible:ring-gray-500',
      },
      {
        variant: 'solid',
        color: 'danger',
        className: 'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500',
      },
      {
        variant: 'solid',
        color: 'success',
        className: 'bg-green-600 text-white hover:bg-green-700 focus-visible:ring-green-500',
      },
      {
        variant: 'solid',
        color: 'warning',
        className: 'bg-yellow-500 text-white hover:bg-yellow-600 focus-visible:ring-yellow-400',
      },
      {
        variant: 'outline',
        color: 'default',
        className: 'border-gray-900 text-gray-900 hover:bg-gray-100',
      },
      {
        variant: 'outline',
        color: 'primary',
        className: 'border-blue-600 text-blue-600 hover:bg-blue-50',
      },
        {
            variant: 'outline',
            color: 'secondary',
            className: 'border-gray-600 text-gray-600 hover:bg-gray-100',
        },
        {
            variant: 'outline',
            color: 'danger',
            className: 'border-red-600 text-red-600 hover:bg-red-50',
        },
        {
            variant: 'outline',
            color: 'success',
            className: 'border-green-600 text-green-600 hover:bg-green-50',
        },
        {
            variant: 'outline',
            color: 'warning',
            className: 'border-yellow-500 text-yellow-500 hover:bg-yellow-50',
        },

      
      {
        variant: 'ghost',
        color: 'default',
        className: 'text-gray-900 hover:bg-gray-100',
      },
      {
        variant: 'ghost',
        color: 'primary',
        className: 'text-blue-600 hover:bg-blue-50',
      },
      
    ],
    defaultVariants: {
      variant: 'solid',
      color: 'default',
      size: 'md',
      fullWidth: false,
    },
  }
);

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>, // remove a propriedade 'color' do ButtonHTMLAttributes
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
        className={cn(buttonVariants({ 
          variant, 
          color, 
          size, 
          fullWidth,
          className
        }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg 
              className="animate-spin h-4 w-4" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <circle 
                className="opacity-25" 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4"
              />
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Loading...
          </span>
        ) : children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
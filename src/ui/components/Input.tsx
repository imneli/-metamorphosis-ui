import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const inputVariants = cva(
  'flex w-full rounded-md border text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-gray-200',
        error: 'border-red-500',
        success: 'border-green-500',
      },
      size: {
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-4 text-sm',
        lg: 'h-12 px-6 text-base',
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-auto',
      }
    },
    compoundVariants: [
      {
        variant: 'default',
        className: 'hover:border-gray-300 focus-visible:ring-blue-500',
      },
      {
        variant: 'error',
        className: 'hover:border-red-600 focus-visible:ring-red-500 text-red-600 placeholder:text-red-400',
      },
      {
        variant: 'success',
        className: 'hover:border-green-600 focus-visible:ring-green-500 text-green-600 placeholder:text-green-400',
      },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'md',
      fullWidth: true,
    }
  }
);

type InputPropsWithoutSize = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>;

export interface InputProps extends InputPropsWithoutSize, VariantProps<typeof inputVariants> {
  label?: string;
  helperText?: string;
  error?: string;
  success?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

// Input personalizado com variants (default, error, success)
// Propriedades como label, variant, size, error, success, helperText, e ícones.
// Você pode adicionar seu próprio Icon no Input, e usar para o que bem quiser.


const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className,
    variant,
    size,
    fullWidth,
    label,
    helperText,
    error,
    success,
    startIcon,
    endIcon,
    disabled,
    ...props 
  }, ref) => {
    const inputVariant = error ? 'error' : success ? 'success' : variant;

    return (
      <div className="space-y-1">
        {label && (
          <label className="text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <div className="relative">
          {startIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              {startIcon}
            </div>
          )}
          <input
            className={cn(
              inputVariants({ variant: inputVariant, size, fullWidth }),
              startIcon && 'pl-10',
              endIcon && 'pr-10',
              className
            )}
            ref={ref}
            disabled={disabled}
            {...props}
          />
          {endIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
              {endIcon}
            </div>
          )}
        </div>
        {(helperText || error || success) && (
          <p 
            className={cn(
              "text-xs",
              error && "text-red-600",
              success && "text-green-600",
              !error && !success && "text-gray-500"
            )}
          >
            {error || success || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input, inputVariants };
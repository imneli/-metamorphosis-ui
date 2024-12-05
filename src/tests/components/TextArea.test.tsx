import React, { forwardRef } from 'react';
import { cn } from '../../lib/utils';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
}

const TextAreaTest = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, label, helperText, ...props }, ref) => {
    return (
      <div className="flex flex-col space-y-1">
        {label && (
          <label className="text-sm font-medium text-gray-700 p-2">
            {label}
          </label>
        )}
        <textarea
          placeholder='Type your message here'
          ref={ref}
          className={cn(
            'block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none p-2', 
            className
          )}
          {...props}
        />
        {helperText && (
          <p className="text-xs text-gray-600">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

TextAreaTest.displayName = 'TextAreaTest';

export { TextAreaTest };
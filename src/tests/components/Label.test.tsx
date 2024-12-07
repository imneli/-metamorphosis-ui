import React from 'react';
import { cn } from '../../lib/utils';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor?: string;
}

const LabelTest: React.FC<LabelProps> = ({ children, className, htmlFor, ...props }) => {
  return (
    <label htmlFor={htmlFor} className={cn('block text-sm font-medium text-gray-700', className)} {...props}>
      {children}
    </label>
  );
};

export { LabelTest };
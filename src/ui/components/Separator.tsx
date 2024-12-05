import React from 'react';

export interface SeparatorProps extends React.HTMLProps<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export const Separator: React.FC<SeparatorProps> = ({
  orientation = 'horizontal',
  className,
  ...props
}) => {
  return (
    <div
      className={`${
        orientation === 'vertical'
          ? 'w-px h-8 bg-gray-200'
          : 'w-full h-px bg-gray-200 my-2'
      } ${className}`}
      {...props}
    />
  );
};

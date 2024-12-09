import React, { createContext, useContext, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { cn } from '../../lib/utils';

const AccordionContext = createContext<{
  value?: string;
  onValueChange?: (value: string) => void;
}>({});

const AccordionItemContext = createContext<{
  isOpen?: boolean;
  value?: string;
}>({});

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'single' | 'multiple';
  value?: string;
  onValueChange?: (value: string) => void;
  collapsible?: boolean;
}

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, children, type = 'single', value, onValueChange, ...props }, ref) => {
    const [internalValue, setInternalValue] = useState<string>('');
    
    const handleValueChange = (newValue: string) => {
      setInternalValue(newValue);
      onValueChange?.(newValue);
    };

    return (
      <AccordionContext.Provider 
        value={{ 
          value: value ?? internalValue, 
          onValueChange: handleValueChange 
        }}
      >
        <div
          ref={ref}
          className={cn("space-y-1", className)}
          {...props}
        >
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);

export const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, children, value, ...props }, ref) => {
    const { value: selectedValue, onValueChange } = useContext(AccordionContext);
    const isOpen = selectedValue === value;

    return (
      <AccordionItemContext.Provider value={{ isOpen, value }}>
        <div
          ref={ref}
          className={cn(
            "border rounded-lg overflow-hidden",
            isOpen && "bg-gray-50",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </AccordionItemContext.Provider>
    );
  }
);

export const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  const { isOpen, value } = useContext(AccordionItemContext);
  const { onValueChange } = useContext(AccordionContext);

  return (
    <button
      ref={ref}
      className={cn(
        "flex items-center justify-between w-full p-4 text-left",
        "text-sm font-medium transition-colors",
        "hover:bg-gray-100/80 focus:outline-none focus:ring-2 focus:ring-gray-200",
        className
      )}
      onClick={() => onValueChange?.(value!)}
      aria-expanded={isOpen}
      {...props}
    >
      {children}
      <FiChevronDown
        className={cn(
          "h-4 w-4 transition-transform duration-200",
          isOpen && "transform rotate-180"
        )}
      />
    </button>
  );
});

export const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { isOpen } = useContext(AccordionItemContext);

  return (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden transition-all duration-200 ease-in-out",
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        className
      )}
      aria-hidden={!isOpen}
      {...props}
    >
      <div className="p-4 pt-0">{children}</div>
    </div>
  );
});

// display names
Accordion.displayName = "Accordion";
AccordionItem.displayName = "AccordionItem";
AccordionTrigger.displayName = "AccordionTrigger";
AccordionContent.displayName = "AccordionContent";
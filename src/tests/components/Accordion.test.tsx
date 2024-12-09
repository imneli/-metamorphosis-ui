import React, { createContext, useContext, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { cn } from '../../lib/utils';

const AccordionContext = createContext<{
  value?: string | null;
  onValueChange?: (value: string) => void;
}>({});

const AccordionItemContext = createContext<{
  isOpen?: boolean;
  value?: string;
}>({});

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'bordered' | 'minimal';
  type?: 'single' | 'multiple';
  value?: string;
  onValueChange?: (value: string) => void;
  collapsible?: boolean;
}

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, children, variant = 'default', type = 'single', value, onValueChange, ...props }, ref) => {
    const [internalValue, setInternalValue] = useState<string | null>(null);
    
    const handleValueChange = (newValue: string) => {
      // toggle
      const nextValue = internalValue === newValue ? null : newValue;
      setInternalValue(nextValue);
      onValueChange?.(nextValue!);
    };

    return (
      <AccordionContext.Provider value={{ value: value ?? internalValue, onValueChange: handleValueChange }}>
        <div 
          ref={ref} 
          className={cn(
            "space-y-4",
            className
          )} 
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
    const { value: selectedValue } = useContext(AccordionContext);
    const isOpen = selectedValue === value;

    return (
      <AccordionItemContext.Provider value={{ isOpen, value }}>
        <div
          ref={ref}
          className={cn(
            "rounded-lg border border-gray-200",
            "overflow-hidden transition-all duration-200",
            isOpen && "ring-1 ring-gray-200 bg-white shadow-sm",
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

export const AccordionTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...props }, ref) => {
    const { isOpen, value } = useContext(AccordionItemContext);
    const { onValueChange } = useContext(AccordionContext);

    return (
      <button
        ref={ref}
        className={cn(
          "flex w-full items-center justify-between",
          "px-6 py-4 text-left",
          "text-base font-medium text-gray-900",
          "transition-all duration-200 ease-in-out",
          "hover:bg-gray-50",
          "focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-1",
          isOpen && "bg-gray-50",
          className
        )}
        onClick={() => onValueChange?.(value!)}
        aria-expanded={isOpen}
        {...props}
      >
        <span className="transition-colors duration-200">
          {children}
        </span>
        <FiChevronDown
          className={cn(
            "h-5 w-5 text-gray-400",
            "transition-transform duration-300 ease-in-out",
            isOpen && "rotate-180 transform text-gray-600"
          )}
        />
      </button>
    );
  }
);

export const AccordionContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const { isOpen } = useContext(AccordionItemContext);

    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0",
        )}
        aria-hidden={!isOpen}
        {...props}
      >
        <div className={cn(
          "px-6 pb-6 pt-2",
          "text-gray-600 text-[15px] leading-relaxed",
          "bg-white",
          className
        )}>
          {children}
        </div>
      </div>
    );
  }
);

Accordion.displayName = "Accordion";
AccordionItem.displayName = "AccordionItem";
AccordionTrigger.displayName = "AccordionTrigger";
AccordionContent.displayName = "AccordionContent";
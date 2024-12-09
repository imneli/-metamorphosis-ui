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
    const [internalValue, setInternalValue] = useState<string>('');
    
    const handleValueChange = (newValue: string) => {
      setInternalValue(newValue);
      onValueChange?.(newValue);
    };

    return (
      <AccordionContext.Provider value={{ value: value ?? internalValue, onValueChange: handleValueChange }}>
        <div ref={ref} className={cn("divide-y divide-gray-200", className)} {...props}>
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
            "overflow-hidden transition-colors duration-200",
            "first:rounded-t-lg last:rounded-b-lg",
            isOpen && "bg-gray-50/50",
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
          "group flex w-full items-center justify-between",
          "px-6 py-4 text-left",
          "text-sm font-medium text-gray-900",
          "transition-all duration-200",
          "hover:bg-gray-50/80",
          "focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-1",
          className
        )}
        onClick={() => onValueChange?.(value!)}
        aria-expanded={isOpen}
        {...props}
      >
        <span className="transition-colors duration-200 group-hover:text-blue-600">
          {children}
        </span>
        <FiChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-gray-500",
            "transition-transform duration-200",
            "group-hover:text-blue-600",
            isOpen && "rotate-180 transform"
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
          "overflow-hidden transition-all duration-200 ease-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
        aria-hidden={!isOpen}
        {...props}
      >
        <div className={cn(
          "px-6 pb-4 text-sm text-gray-600",
          "prose prose-sm max-w-none",
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

export { type AccordionProps, type AccordionItemProps };
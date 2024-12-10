import React, { createContext, useContext, useState } from 'react';
import { FiChevronDown, FiPlus, FiMinus, FiArrowDown, FiArrowRight } from 'react-icons/fi';
import { cn } from '../../lib/utils';

const AccordionContext = createContext<{
  value?: string | null;
  onValueChange?: (value: string) => void;
}>({});

const AccordionItemContext = createContext<{
  isOpen?: boolean;
  value?: string;
}>({});

// Types
type AccordionVariant = 'default' | 'bordered' | 'minimal' | 'floating' | 'filled';
type AccordionSize = 'sm' | 'md' | 'lg';
type AccordionIcon = 'chevron' | 'plus' | 'arrow';

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AccordionVariant;
  size?: AccordionSize;
  icon?: AccordionIcon;
  iconColor?: string;
  type?: 'single' | 'multiple';
  value?: string;
  onValueChange?: (value: string) => void;
  collapsible?: boolean;
}

interface AccordionItemProps extends Omit<AccordionProps, 'value'> {
  value: string;
}

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: AccordionVariant;
  size?: AccordionSize;
  icon?: AccordionIcon;
  iconColor?: string;
}


const variantStyles: Record<AccordionVariant, string> = {
  default: "border border-gray-200 bg-white p-2",
  bordered: "border-2 border-gray-900 bg-transparent p-2",
  minimal: "border-b border-gray-200 rounded-none p-2",
  floating: "shadow-lg bg-white border-none p-2",
  filled: "bg-gray-50 border-none p-2"
} as const;

const sizeStyles: Record<AccordionSize, string> = {
  sm: "text-sm py-2 px-4",
  md: "text-base py-3 px-5",
  lg: "text-lg py-4 px-6"
} as const;

type IconComponents = {
  [K in AccordionIcon]: React.ComponentType<{ className?: string }> | {
    open: React.ComponentType<{ className?: string }>;
    closed: React.ComponentType<{ className?: string }>;
  };
};

const icons: IconComponents = {
  chevron: FiChevronDown,
  plus: {
    open: FiMinus,
    closed: FiPlus
  },
  arrow: {
    open: FiArrowDown,
    closed: FiArrowRight
  }
};

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
    const { variant = 'default' } = props as AccordionProps;
    const isOpen = selectedValue === value;

    return (
      <AccordionItemContext.Provider value={{ isOpen, value }}>
        <div
          ref={ref}
          className={cn(
            "overflow-hidden transition-all duration-200",
            variantStyles[variant],
            variant === 'floating' && "rounded-xl",
            variant !== 'minimal' && "rounded-lg",
            isOpen && variant === 'floating' && "shadow-xl",
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

export const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ className, children, variant = 'default', size = 'md', icon = 'chevron', iconColor, ...props }, ref) => {
    const { isOpen, value } = useContext(AccordionItemContext);
    const { onValueChange } = useContext(AccordionContext);

    const IconComponent = typeof icons[icon] === 'function' 
      ? icons[icon] as React.ComponentType<{ className?: string }>
      : isOpen 
        ? (icons[icon] as { open: React.ComponentType<{ className?: string }> }).open 
        : (icons[icon] as { closed: React.ComponentType<{ className?: string }> }).closed;

    return (
      <button
        ref={ref}
        className={cn(
          "flex w-full items-center justify-between",
          "transition-all duration-200 ease-in-out",
          sizeStyles[size],
          variant === 'minimal' && "hover:bg-transparent",
          variant === 'filled' && "hover:bg-gray-100",
          variant === 'floating' && "hover:bg-gray-50",
          isOpen && variant === 'filled' && "bg-gray-100",
          className
        )}
        onClick={() => onValueChange?.(value!)}
        {...props}
      >
        <span className={cn(
          "font-medium",
          variant === 'bordered' && "text-gray-900",
          size === 'lg' && "font-semibold"
        )}>
          {children}
        </span>
        <IconComponent
          className={cn(
            "transition-transform duration-200",
            {
              'h-4 w-4': size === 'sm',
              'h-5 w-5': size === 'md',
              'h-6 w-6': size === 'lg'
            },
            isOpen && icon === 'chevron' && "rotate-180",
            iconColor || "text-gray-400"
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
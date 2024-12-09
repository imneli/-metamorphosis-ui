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
type AccordionVariant = 'default' | 'bordered' | 'minimal';
type AccordionSize = 'sm' | 'md' | 'lg';
type AccordionIcon = 'chevron' | 'plus' | 'arrow';

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AccordionVariant;
  size?: AccordionSize;
  icon?: AccordionIcon;
  type?: 'single';
  value?: string;
  onValueChange?: (value: string) => void;
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

// Style objects with proper typing
const variantStyles: Record<AccordionVariant, string> = {
  default: "border border-gray-200 bg-white",
  bordered: "border-2 border-gray-900",
  minimal: "border-b border-gray-200"
} as const;

const sizeStyles: Record<AccordionSize, string> = {
  sm: "text-sm p-3",
  md: "text-base p-4",
  lg: "text-lg p-5"
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
            variant !== 'minimal' && "rounded-lg",
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

    const renderIcon = () => {
      const currentIcon = icons[icon];
      if ('open' in currentIcon && 'closed' in currentIcon) {
        const Icon = isOpen ? currentIcon.open : currentIcon.closed;
        return (
          <Icon 
            className={cn(
              "transition-transform duration-200",
              {
                'h-4 w-4': size === 'sm',
                'h-5 w-5': size === 'md',
                'h-6 w-6': size === 'lg'
              },
              iconColor || "text-gray-400"
            )}
          />
        );
      }
      
      // Handle single icon case (like chevron)
      const Icon = currentIcon as React.ComponentType<{ className?: string }>;
      return (
        <Icon 
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
      );
    };

    return (
      <button
        ref={ref}
        className={cn(
          "flex w-full items-center justify-between",
          "transition-all duration-200",
          sizeStyles[size],
          className
        )}
        onClick={() => onValueChange?.(value!)}
        {...props}
      >
        <span className="font-medium">
          {children}
        </span>
        {renderIcon()}
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
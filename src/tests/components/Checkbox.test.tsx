import React, { forwardRef } from "react";
import { FaCheck } from "react-icons/fa";
import { cn } from "@/lib/utils";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, onChange, disabled, ...props }, ref) => {
    const [isChecked, setIsChecked] = React.useState(false);

    const handleClick = () => {
      if (disabled) return;
      
      setIsChecked(!isChecked);
      if (onChange) {
        const event = {
          target: { checked: !isChecked }
        } as React.ChangeEvent<HTMLInputElement>;
        onChange(event);
      }
    };

    return (
      <div 
        className={cn(
          "relative inline-flex",
          disabled ? "cursor-not-allowed" : "cursor-pointer"
        )} 
        onClick={handleClick}
      >
        <input
          type="checkbox"
          ref={ref}
          className="sr-only"
          checked={isChecked}
          disabled={disabled}
          {...props}
        />
        <div
          className={cn(
            "h-5 w-5 rounded border transition-all duration-200",
            "flex items-center justify-center",
            !disabled && "hover:border-gray-400",
            !disabled && isChecked && "hover:bg-gray-900",
            isChecked ? "bg-black border-black text-white" : "border-gray-300 bg-white",
            disabled && "opacity-50 bg-gray-100",
            "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black",
            className
          )}
        >
          {isChecked && <FaCheck className="h-3 w-3" />}
        </div>
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
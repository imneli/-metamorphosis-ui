import React, { forwardRef } from "react";
import { FaCheck } from "react-icons/fa";
import { cn } from "@/lib/utils";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, onChange, ...props }, ref) => {
    const [isChecked, setIsChecked] = React.useState(false);

    const handleClick = () => {
      setIsChecked(!isChecked);
      if (onChange) {
        const event = {
          target: { checked: !isChecked }
        } as React.ChangeEvent<HTMLInputElement>;
        onChange(event);
      }
    };

    return (
      <div className="relative inline-flex" onClick={handleClick}>
        <input
          type="checkbox"
          ref={ref}
          className="sr-only"
          checked={isChecked}
          {...props}
        />
        <div
          className={cn(
            "h-5 w-5 rounded border transition-all duration-200",
            "flex items-center justify-center cursor-pointer",
            isChecked ? "bg-black border-black text-white" : "border-gray-300 bg-white",
            props.disabled && "opacity-50 cursor-not-allowed",
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
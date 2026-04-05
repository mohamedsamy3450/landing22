import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "default" | "sm" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", size = "default", children, ...props }, ref) => {
    const sizeClasses = {
      default: "px-4 py-2",
      sm: "px-3 py-1 text-sm",
      lg: "px-8 py-3 text-lg",
    };

    return (
      <button
        className={`rounded-lg font-bold transition-all duration-300 ${sizeClasses[size]} ${className}`}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
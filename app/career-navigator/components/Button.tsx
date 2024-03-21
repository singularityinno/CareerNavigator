import React from "react";
type ButtonProps = {
  children: React.ReactNode;
  color: string;
  className?: string;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  color,
  disabled = false,
  className = "",
}) => {
  return (
    <div
      className={`shadow-lg shadow-${color}/60 w-fit h-fit rounded-full
      ${className}`}
    >
      <button
        className={`
            bg-${color} text-white p-4 text-lg rounded-full 
            hover:-rotate-45
            transition-all duration-100`}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;

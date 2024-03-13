import React from "react";
type ButtonProps = {
  children: React.ReactNode;
  color: string;
  className?: string;
  disabled?: boolean;
};

const ButtonSecondary: React.FC<ButtonProps> = ({
  children,
  color,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      className={`
            bg-${color} text-white px-3 py-1 text-md font-bold rounded-full 
            transition-all duration-100 hover:brightness-75 shadow-lg shadow-grey/60
            ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ButtonSecondary;

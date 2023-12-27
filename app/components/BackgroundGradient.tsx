import React from "react";

interface BackgroundGradientProps {
  width: string;
  height: string;
  left: string;
  top: string;
  gradientColor: string;
}

const BackgroundGradient: React.FC<BackgroundGradientProps> = ({
  width,
  height,
  left,
  top,
  gradientColor,
}) => {
  return (
    <div
      style={{
        background: `radial-gradient(${gradientColor})`,
        width,
        height,
        left,
        top,
        opacity: 0.2,
              position: "absolute",
        filter: "blur(10px)",
      }}
    ></div>
  );
};

export default BackgroundGradient;

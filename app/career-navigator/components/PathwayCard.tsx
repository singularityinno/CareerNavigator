import React from "react";
import { PiCircleDashedThin } from "react-icons/pi";

interface PathwayCardProps {
  name: string;
  icon: JSX.Element;
  color: string;
  selected: boolean;
  handleClick: () => void;
}

const PathwayCard: React.FC<PathwayCardProps> = ({
  name,
  icon: Icon,
  color,
  selected = false,
  handleClick,
}) => {
  const selectedStyle = selected ? "border-4 border-primary-yellow" : "border-4 border-grey-500";
  return (
    <div
      style={{ background: color }}
      className={`relative text-white rounded-lg h-auto p-10 text-3xl ${selectedStyle} hover:drop-shadow-md transition-all duration-200`}
      onClick={handleClick}
    >
      <div className="text-7xl p-2">{Icon}</div>
      <div className="absolute top-5 left-5 text-9xl">
        <PiCircleDashedThin />
      </div>
      <h2 className="font-extrabold mt-16">
        {name} / <br />
        {name == "Student" ? "New Grad" : "Advancement"}
      </h2>
      <h3 className="font-semibold">Pathway</h3>
    </div>
  );
};

export default PathwayCard;

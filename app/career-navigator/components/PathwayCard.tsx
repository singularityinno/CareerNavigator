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
      className={`relative text-white rounded-lg h-auto p-10 text-4xl ${selectedStyle} hover:drop-shadow-md transition-all duration-200`}
      onClick={handleClick}
    >
      <div className="text-8xl p-6 border-white border-2 border-dashed rounded-full w-fit">
        {Icon}
      </div>
      <h2 className="font-extrabold mt-16">
        {name} {name == "Student" && "/"}
        <br />
        {name == "Student" ? "New Grad" : "Advancement"}
      </h2>
      <h3 className="font-semibold">Pathway</h3>
    </div>
  );
};

export default PathwayCard;

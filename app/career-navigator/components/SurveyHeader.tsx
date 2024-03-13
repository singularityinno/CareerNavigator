import React from "react";
import { FaGraduationCap, FaCheck } from "react-icons/fa";
import { Pathway, useSurveyContext } from "@/career-navigator/contexts";
import { TbTie } from "react-icons/tb";
import { getSurveyStages } from "@/career-navigator/contexts/SurveyContext";

const SurveyHeader = () => {
  const { pathway, currStage } = useSurveyContext();
  const stages = getSurveyStages(pathway);
  const stageWidth = (currStage / (stages.length - 1)) * 800;
  return (
    <div className="relative w-[850px] mx-auto">
      <hr
        className={`border-t-2 border-pink absolute top-4 -z-10 transition-all duration-200`}
        style={{ width: `${stageWidth}px`, left: "20px" }}
      />
      <hr
        className={`border-t-2 border-dashed border-grey absolute top-4 -z-20 w-[800px] left-8`}
      />
      <div className="flex justify-between">
        {stages.map((stage, index) => (
          <div key={stage.name}>
            <Dot
              text={stage.name}
              state={
                currStage === index
                  ? "active"
                  : currStage < index
                  ? "upcoming"
                  : "completed"
              }
            >
              {stage.icon}
            </Dot>
          </div>
        ))}
      </div>
    </div>
  );
};

type DotProps = {
  children: React.ReactNode;
  text: string;
  state: "active" | "completed" | "upcoming";
};

const Dot: React.FC<DotProps> = ({ children, text, state }) => {
  const style =
    state === "active"
      ? "bg-black-secondary border-pink"
      : state === "completed"
      ? "bg-pink border-pink"
      : "bg-black-secondary border-grey";
  const textStyle =
    state === "active"
      ? "text-pink"
      : state === "completed"
      ? "text-white"
      : "text-grey";
  return (
    <div className="text-center">
      <div
        className={`mx-auto mb-2 w-8 h-8 border-2 rounded-full text-lg text-center flex items-center justify-center transition-all duration-100 ${style}`}
      >
        {state === "completed" && children}
      </div>
      <div className={`text-md transition-all duration-200 ${textStyle}`}>
        {text}
      </div>
    </div>
  );
};
export default SurveyHeader;

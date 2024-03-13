import React, { ReactNode } from "react";
import { FaGraduationCap, FaCheck } from "react-icons/fa";
import { useSurveyContext } from "@/career-navigator/contexts";

const SurveyHeader = () => {
    const { currStage = 0 } = useSurveyContext();
return (
  <div className="flex gap-[15%] justify-center">
    <Dot text="Pathway" state={currStage === 0 ? "active" : "completed"}>
      <FaGraduationCap />
    </Dot>
    <Dot
      text="Q1-3"
      state={
        currStage === 1 ? "active" : currStage < 1 ? "upcoming" : "completed"
      }
    >
      <FaCheck />
    </Dot>
    <Dot
      text="Q4-6"
      state={
        currStage === 2 ? "active" : currStage < 2 ? "upcoming" : "completed"
      }
    >
      <FaCheck />
    </Dot>
    <Dot
      text="Q7-9"
      state={
        currStage === 3 ? "active" : currStage < 3 ? "upcoming" : "completed"
      }
    >
      <FaCheck />
    </Dot>
    <Dot
      text="Results"
      state={
        currStage === 4 ? "active" : currStage < 4 ? "upcoming" : "completed"
      }
    >
      <FaCheck />
    </Dot>
  </div>
);
};

type DotProps = {
  children: ReactNode;
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
        className={`mx-auto mb-2 w-8 h-8 border-2 rounded-full text-lg text-center flex items-center justify-center ${style}`}
      >
        {state === "completed" && children}
      </div>
      <div className={`text-md ${textStyle}`}>{text}</div>
    </div>
  );
};
export default SurveyHeader;

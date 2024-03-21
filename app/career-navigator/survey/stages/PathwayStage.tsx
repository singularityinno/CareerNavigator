import { Pathway, useSurveyContext } from "@/career-navigator/contexts";
import { FaArrowRight, FaGraduationCap } from "react-icons/fa";
import { TbTie } from "react-icons/tb";
import React from "react";
import Button from "@/career-navigator/components/Button";

const PathwayStage = () => {
  const {
    pathway = Pathway.STUDENT,
    setPathway,
    currStage,
    setCurrStage,
  } = useSurveyContext();
  const activeStyle = "bg-pink shadow-lg shadow-pink/60";
  const inactiveStyle = "bg-black-secondary shadow-xs shadow-black-secondary/60 hover:brightness-150";
  return (
    <div className="mx-10 mt-44">
      <h1 className="text-2xl font-bold">
        Choose Your <span className="text-pink">Pathway</span>
      </h1>
      <div className="flex w-full items-center mt-4 gap-10">
        <div className="flex text-center font-bold text-lg w-full">
          <div
            className={`flex-1 p-2 rounded-l-full flex cursor-pointer transition-all duration-100 ${
              pathway === Pathway.STUDENT ? activeStyle : inactiveStyle
            }`}
            onClick={() => setPathway(Pathway.STUDENT)}
          >
            <FaGraduationCap className="text-2xl ml-2 my-auto" />
            <h2 className="m-auto">Student / New Grad</h2>
          </div>
          <div
            className={`flex-1 p-2 bg-black-secondary rounded-r-full flex cursor-pointer transition-all duration-100 ${
              pathway === Pathway.PROFESSIONAL ? activeStyle : inactiveStyle
            }`}
            onClick={() => setPathway(Pathway.PROFESSIONAL)}
          >
            <h2 className="m-auto">Professional Advancement</h2>
            <TbTie className="text-2xl mr-2 my-auto" />
          </div>
        </div>
        <div onClick={() => setCurrStage(currStage + 1)}>
          <Button color="pink">
            <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PathwayStage;

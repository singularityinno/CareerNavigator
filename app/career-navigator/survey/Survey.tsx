import React from "react";
import { useSurveyContext } from "@/career-navigator/contexts";
import PathwayStage from "./stages/PathwayStage";
import QuestionStage from "./stages/QuestionStage";
import ResultsStage from "./stages/ResultsStage";
import SurveyHeader from "../components/SurveyHeader";

const Survey = () => {
  const { currStage } = useSurveyContext();

  const renderStage = () => {
    switch (currStage) {
      case 0:
        return <PathwayStage />;
      case 1:
      case 2:
      case 3:
        return <QuestionStage />;
      case 4:
        return <ResultsStage />;
    }
  };

  return (
    <div>
      <SurveyHeader />
      {renderStage()}
    </div>
  );
};

export default Survey;

"use client";

import React, { createContext, useState } from "react";
import PathwayStage from "./PathwayStage";
import QuestionsStage from "./QuestionsStage";

const Survey: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SurveyStage />
    </div>
  );
};

const SurveyStage: React.FC = () => {
  const [step, setStep] = useState(0);
  switch (step) {
    case 0:
      return <PathwayStage nextStep={() => setStep(1)} />;
    case 1:
      return <QuestionsStage nextStep={() => setStep(2)} />;
    default:
      return <PathwayStage nextStep={() => setStep(1)} />;
  }
};

export default Survey;

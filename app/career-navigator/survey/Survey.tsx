import React from "react";
import { getSurveyStages, useSurveyContext } from "@/career-navigator/contexts";
import SurveyHeader from "../components/SurveyHeader";
import ButtonSecondary from "../components/ButtonSecondary";
import { Route } from "@/constants/routes";
import Link from "next/link";

const Survey = () => {
  const { currStage } = useSurveyContext();

  const renderStage = () => {
    return getSurveyStages()[currStage].component;
  };

  return (
    <div>
      <SurveyHeader />
      {renderStage()}
      <Link
        href={Route.CAREER_NAVIGATOR}
        className="fixed left-4 bottom-4"
      >
        <ButtonSecondary color="grey">Exit</ButtonSecondary>
      </Link>
    </div>
  );
};

export default Survey;

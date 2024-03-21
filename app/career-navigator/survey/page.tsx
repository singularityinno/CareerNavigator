"use client";
import React from "react";
import { SurveyWrapper } from "@/career-navigator/contexts";
import Survey from "./Survey";

const SurveyPage = () => {
  return (
    <SurveyWrapper>
      <Survey />
    </SurveyWrapper>
  );
};

export default SurveyPage;

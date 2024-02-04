"use client";
import React, { createContext, useContext, useState } from "react";

export type responsesType = {
  id: number;
  question?: string;
  answer?: string;
};

export enum Pathway {
  STUDENT = "student",
  PROFESSIONAL = "professional",
}

const sampleReponses = [
  {
    id: 1,
    question: "What is your name?",
    answer: "John Doe",
  },
  {
    id: 2,
    question: "What is your age?",
    answer: "21",
  },
  {
    id: 3,
    question: "What is your favorite color?",
    answer: "Blue",
  },
];

type SurveyContextType = {
  pathway?: Pathway;
  setPathway?: (pathway: Pathway) => void;
  responses?: responsesType[];
  setResponses?: (responses: responsesType[]) => void;
};

const SurveyContext = createContext<SurveyContextType>({
  pathway: Pathway.STUDENT,
  setPathway: () => {},
  responses: [],
  setResponses: () => {},
});

export const SurveyWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [pathway, setPathway] = useState<Pathway>(Pathway.STUDENT);
  const [responses, setResponses] = useState<responsesType[]>(sampleReponses);

  return (
    <SurveyContext.Provider value={{pathway, setPathway, responses, setResponses}}>
      {children}
    </SurveyContext.Provider>
  );
};

export function useSurveyContext() {
  return useContext(SurveyContext);
}
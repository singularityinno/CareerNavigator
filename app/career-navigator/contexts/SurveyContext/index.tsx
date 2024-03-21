import PathwayStage from "@/career-navigator/survey/stages/PathwayStage";
import QuestionStage from "@/career-navigator/survey/stages/QuestionStage";
import ResultsStage from "@/career-navigator/survey/stages/ResultsStage";
import React, { createContext, useContext, useState } from "react";
import { FaCheck, FaGraduationCap } from "react-icons/fa";
import { TbTie } from "react-icons/tb";

export type responseSetType = responseType[];
export type responseType = {
  id: number;
  question: string;
  response: string;
};

export enum Pathway {
  STUDENT = "student",
  PROFESSIONAL = "professional",
}

export const getSurveyStages = (
  pathway: Pathway = Pathway.STUDENT
): {
  name: string;
  icon: React.ReactNode;
  component: React.ReactNode;
}[] => [
  {
    name: "Pathway",
    icon: pathway === Pathway.STUDENT ? <FaGraduationCap /> : <TbTie />,
    component: <PathwayStage />,
  },
  { name: "Q1-3", icon: <FaCheck />, component: <QuestionStage /> },
  { name: "Q4-6", icon: <FaCheck />, component: <QuestionStage /> },
  { name: "Q7-9", icon: <FaCheck />, component: <QuestionStage /> },
  { name: "Results", icon: <FaCheck />, component: <ResultsStage /> },
];

const sampleReponses: responseSetType[] = [
  [
    {
      id: 1,
      question: "What is your name?",
      response: "",
    },
    {
      id: 2,
      question: "What is your age?",
      response: "",
    },
    {
      id: 3,
      question: "What is your favorite color?",
      response: "",
    },
  ],
];

type SurveyContextType = {
  pathway?: Pathway;
  setPathway: (pathway: Pathway) => void;
  responses?: responseSetType[];
  setResponses: (responses: responseSetType[]) => void;
  currStage: number;
  setCurrStage: (stage: number) => void;
};

const SurveyContext = createContext<SurveyContextType>({
  pathway: Pathway.STUDENT,
  setPathway: () => { },
  responses: [],
  setResponses: () => { },
  currStage: 0,
  setCurrStage: () => {},
});

export const SurveyWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [pathway, setPathway] = useState<Pathway>(Pathway.STUDENT);
  const [responses, setResponses] = useState<responseSetType[]>(sampleReponses);
  const [currStage, setCurrStage] = useState<number>(0);

  return (
    <SurveyContext.Provider
      value={{
        pathway,
        setPathway,
        responses,
        setResponses,
        currStage,
        setCurrStage,
      }}
    >
      {children}
    </SurveyContext.Provider>
  );
};

export const useSurveyContext = () => useContext(SurveyContext);

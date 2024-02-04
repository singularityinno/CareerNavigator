import { Pathway, useSurveyContext } from "@/app/contexts/SurveyContext";
import React, { useState } from "react";
import { GrFormNext } from "react-icons/gr";

const QuestionsStage: React.FC<{ nextStep: () => void }> = ({ nextStep }) => {
  const { pathway, responses, setResponses } = useSurveyContext();
  const [step, setStep] = useState<number>(1);
  const stepRange = (step: number) => {
    return Array.from({ length: 3 }, (_, index) => (step - 1) * 3 + index + 1);
  };
  const [error, setError] = useState<boolean>(false);

  const handleNext = () => {
    const currentStepRange = stepRange(step);
    const hasIncompleteResponses = currentStepRange.some((questionId) => {
      const response = responses?.find(
        (response) => response.id === questionId
      );
      return !response || !response.answer;
    });

    if (!hasIncompleteResponses) {
      console.log(responses);
      setStep((prevStep) => prevStep + 1);
    } else {
      setError(true);
    }
  };

  return (
    <div className="relative mx-20 pt-10">
      <div className="relative flex">
        <div className="w-24 h-24 border-gray-500 border-2 border-dashed rounded-full">
          <h1 className="text-gray-500 text-xl font-bold text-center mt-3">
            Step
            <br />
            <span className="text-3xl">{step} / 3</span>
          </h1>
        </div>
        <div
          className="ml-auto p-4 h-fit my-auto text-white font-bold rounded-md"
          style={{
            background:
              "conic-gradient(from 158deg at 81.45% 107.38%, rgba(238, 51, 255, 0.54) 74.99999821186066deg, rgba(255, 0, 96, 0.54) 121.87499642372131deg, rgba(255, 5, 99, 0.45) 181.5416693687439deg)",
          }}
        >
          {pathway == Pathway.STUDENT
            ? "Student / New Grad"
            : "Professional Advancement"}
        </div>
      </div>
      {responses && (
        <div className="mt-5">
          {stepRange(step).map((questionId) =>
            responses?.find((response) => response.id === questionId) ? (
              <Question key={questionId} questionId={questionId} />
            ) : null
          )}
        </div>
      )}
      <div className="w-full relative mt-3 flex pb-5">
        <button
          className="shadow-lg shadow-primary-purple/20 text-primary-purple ml-auto mr-8 px-3 py-1 border-[1px] border-primary-purple rounded-full w-fit flex items-center h-auto font-bold text-md hover:bg-primary-purple hover:text-white transition-all duration-200"
          onClick={handleNext}
        >
          Continue
          <span className="text-xl">
            <GrFormNext />
          </span>
        </button>
      </div>
    </div>
  );
};

const Question: React.FC<{
  questionId: number;
}> = ({ questionId }) => {
  const { responses, setResponses } = useSurveyContext();
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    const updatedResponses = responses?.map((response) => {
      if (response.id === questionId) {
        return { ...response, answer: value };
      }
      return response;
    });
    if (setResponses && updatedResponses) {
      setResponses(updatedResponses);
    }
  };
  return (
    <div className="py-4">
      <div className="grid grid-cols-10 gap-1 mx-8">
        <h2 className="font-extrabold text-3xl col-span-1">Q{questionId}</h2>
        <p className="col-span-9 font-bold text-lg">
          {responses?.find((response) => response.id === questionId)?.question}
        </p>
        <span className="col-span-1"></span>
        <textarea
          className="col-span-9 h-auto min-h-[100px] text-lg p-2 align-text-top bg-white/50 border-2 border-primary-gray border-dashed rounded-md outline-none focus:outline-none focus:border-primary-yellow transition-all duration-200"
          value={
            responses?.find((response) => response.id === questionId)?.answer
          }
          maxLength={5000}
          placeholder="Type your answer here..."
          onChange={(e) => handleInput(e)}
          required
        />
      </div>
    </div>
  );
};

export default QuestionsStage;

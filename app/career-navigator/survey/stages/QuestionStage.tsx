import Button from "@/career-navigator/components/Button";
import { useSurveyContext } from "@/career-navigator/contexts";
import React, { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";

const QuestionStage = () => {
  const { responses, setResponses, currStage, setCurrStage } =
    useSurveyContext();
  const currResponse = responses?.[currStage - 1];
  const setResponse = (index: number, response: string) => {
    if (responses) {
      setResponses([
        ...responses.slice(0, currStage - 1),
        [
          ...responses[currStage - 1].slice(0, index),
          { ...responses[currStage - 1][index], response },
          ...responses[currStage - 1].slice(index + 1),
        ],
        ...responses.slice(currStage),
      ]);
    }
  };

  return (
    <div className="mx-10 mt-10">
      <h1 className="text-2xl font-bold">
        Questions {(currStage - 1) * 3 + 1} - {(currStage - 1) * 3 + 3}
      </h1>
      <p className="text-grey mt-4 text-sm">
        Answer the following questions to get started!
      </p>
      <div className="grid gap-3 mt-8">
        {currResponse &&
          currResponse.map((response, index) => (
            <Question
              question={response.question}
              response={response.response ?? ""}
              setResponse={(response) => {
                setResponse(index, response);
              }}
              key={index}
            />
          ))}
      </div>
      <div onClick={() => setCurrStage(currStage + 1)} className="mt-4 mb-8 flex justify-end">
        <Button color="pink">
          <FaArrowRight />
        </Button>
      </div>
    </div>
  );
};

interface QuestionProps {
  question: string;
  response: string;
  setResponse: (response: string) => void;
}

const Question: React.FC<QuestionProps> = ({
  question,
  response,
  setResponse,
}) => {
  const [textareaHeight, setTextareaHeight] = React.useState("auto");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setResponse(e.target.value);
    changeHeight();
  };

  const changeHeight = () => {
    if (textareaRef.current) {
      setTextareaHeight(
        `${
          textareaRef.current.scrollHeight > 80
            ? textareaRef.current.scrollHeight
            : 80
        }px`
      );
    }
  };

  useEffect(() => {
    changeHeight();
  }, []);

  return (
    <div className="bg-black-secondary p-5 border-white/20 border-[1px] rounded-3xl">
      <p className="font-bold text-md">{question}</p>
      <hr className="border-t-4 border-teal my-3 w-32" />
      <textarea
        ref={textareaRef}
        onInput={handleInput}
        value={response}
        className="w-full rounded-md border-none outline-none bg-black-secondary resize-none"
        style={{ height: textareaHeight }}
        placeholder="Type your response here..."
      />
    </div>
  );
};

export default QuestionStage;

import React from 'react';
import { GrFormNext } from 'react-icons/gr';
import { LuGraduationCap } from 'react-icons/lu';
import { TbTie } from 'react-icons/tb';
import PathwayCard from './PathwayCard';
import { Pathway, useSurveyContext } from '@/app/contexts/SurveyContext';

const PathwayStage: React.FC<{ nextStep: () => void }> = ({ nextStep }) => {
  const { pathway, setPathway } = useSurveyContext();
  const handleNext = () => {
    // if (pathway == ) {
    // }
    // TODO: FINISH THIS
    nextStep();
  }
  return (
    <div className="relative mx-28 pt-20">
      <h1 className="text-4xl font-bold mb-10">
        Select Your <span className="text-primary-pink">Pathway</span>
      </h1>
      <div className="grid grid-cols-2 gap-10">
        <PathwayCard
          name="Student"
          icon={<LuGraduationCap />}
          color="conic-gradient(from 158deg at 81.45% 107.38%, rgba(238, 51, 255, 0.54) 74.99999821186066deg, rgba(255, 0, 96, 0.54) 121.87499642372131deg, rgba(255, 5, 99, 0.45) 181.5416693687439deg)"
          selected={pathway === Pathway.STUDENT}
          handleClick={() => (setPathway ? setPathway(Pathway.STUDENT) : {})}
        />
        <PathwayCard
          name="Professional"
          icon={<TbTie />}
          color="conic-gradient(from 158deg at 81.45% 107.38%, rgba(255, 0, 96, 0.54) 74.99999821186066deg, rgba(179, 0, 242, 0.54) 121.87499642372131deg, rgba(0, 9, 236, 0.54) 181.5416693687439deg)"
          selected={pathway === Pathway.PROFESSIONAL}
          handleClick={() =>
            setPathway ? setPathway(Pathway.PROFESSIONAL) : {}
          }
        />
      </div>
      <div className="w-full relative mt-8 flex">
        <button
          className="shadow-lg shadow-primary-purple/20 text-primary-purple ml-auto mr-0 px-3 py-2 border-[1px] border-primary-purple rounded-full w-fit flex items-center h-auto font-bold text-md hover:bg-primary-purple hover:text-white transition-all duration-200"
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

export default PathwayStage;

import { Metadata } from "next";
import Image from "next/image";
import Layout from "../layout";
import { createContext, useState } from "react";
import { SurveyWrapper } from "../contexts/SurveyContext";
import Header from "./components/Header";
import { AiFillSignal, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { RiCopperCoinLine } from "react-icons/ri";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { Headshot1, Headshot2, Headshot3, Headshot4 } from "./assets";
import Button from "./components/Button";

export const metadata: Metadata = {
  title: "Career Navigator",
  description: "Unleash Your Potential with an AI-Powered CareerPath Navigator",
};

export default function CareerNavigator() {
  return (
    <Layout>
      <Header />
      <div>
        <Block1 />
        <Block2 />
        <Block3 />
        <Block4 />
        <Block5 />
        <div className="mt-72 text-center">
          <h1 className="text-5xl font-extrabold">Unleash Your Potential</h1>
          <h2 className="text-2xl font-bold italic mt-3">
            with an AI-Powered{" "}
            <span className="text-pink">CareerPath Navigator</span>
          </h2>
          <div className="flex justify-end mt-4">
            <Button color="pink" className="mr-80">
              <FaArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

type BlockProps = {
  children: React.ReactNode;
};

const Block: React.FC<BlockProps> = ({ children }) => {
  return (
    <div
      className="
        bg-black-secondary border-[1px] border-white/20 cursor-default
        rounded-3xl w-fit h-fit p-4 hover:bg-black-secondary/80 transition-all duration-100"
    >
      {children}
    </div>
  );
};

const Block1: React.FC = () => {
  return (
    <div className="absolute left-[10%] top-48">
      <Block>
        <div className="flex gap-3">
          <div className="bg-pink rounded-full p-1">
            <AiFillSignal className="text-black" />
          </div>
          <div className="text-sm font-bold">Sharpen Your Skills</div>
        </div>
        <div className="flex text-xs font-bold mt-2">
          <div>Frontend</div>
          <div className="ml-auto bg-pink px-2 rounded-full text-black">
            React
          </div>
        </div>
        <div className="flex text-xs font-bold mt-2 gap-2">
          <div className="mr-8">Backend</div>
          <div className="ml-auto bg-yellow px-2 rounded-full text-black">
            Node
          </div>
          <div className="ml-auto bg-blue px-2 rounded-full text-black">
            Express
          </div>
        </div>
        <div className="flex text-xs font-bold mt-2">
          <div>Frontend</div>
          <div className="ml-auto bg-teal px-2 rounded-full text-black">
            React
          </div>
        </div>
      </Block>
    </div>
  );
};

const Block2: React.FC = () => {
  return (
    <div className="absolute left-[35%] top-28">
      <Block>
        <div className="text-sm font-bold text-center">Build Your Network</div>
        <div className="flex mt-2">
          <Image src={Headshot1} alt="" width={60} className="rounded-full" />
          <Image
            src={Headshot2}
            alt=""
            width={60}
            className="rounded-full -ml-4"
          />
          <Image
            src={Headshot3}
            alt=""
            width={60}
            className="rounded-full -ml-4"
          />
          <Image
            src={Headshot4}
            alt=""
            width={60}
            className="rounded-full -ml-4"
          />
        </div>
      </Block>
    </div>
  );
};

const Block3: React.FC = () => {
  return (
    <div className="absolute left-[57%] top-44">
      <Block>
        <div className="text-sm font-bold">Gain Real-World Experience</div>
        <hr className="border-1 border-white/20 mt-2" />
        <div className="flex mt-2 text-xs justify-between w-96">
          <div>Apply to 3 internship or volunteer positions this week.</div>
          <div className="flex align-baseline gap-1">
            +10
            <RiCopperCoinLine className="text-yellow h-full" />
          </div>
        </div>
        <div className="relative w-full mt-1">
          <div className="bg-yellow w-full h-1 rounded-full"></div>
        </div>
        <div className="flex mt-2 text-xs justify-between w-96">
          <div>Attend 4 Networking Events or Career Fairs.</div>
          <div className="flex align-baseline gap-1">
            +15
            <RiCopperCoinLine className="text-yellow h-full" />
          </div>
        </div>
        <div className="relative w-full mt-1 mb-3">
          <div className="bg-grey w-full h-1 rounded-full absolute top-0 opacity-20"></div>
          <div className="bg-pink w-80 h-1 rounded-full absolute"></div>
        </div>
      </Block>
    </div>
  );
};

const Block4: React.FC = () => {
  return (
    <div className="absolute top-[570px] left-[50%]">
      <Block>
        <div className="text-sm font-bold">Strategize Your Career Path</div>
        <div className="grid grid-cols-6 w-96 h-24 gap-2 p-3 absolute left-1">
          <div className="col-span-1 bg-white/5 h-full"></div>
          <div className="col-span-1 bg-white/2 h-full"></div>
          <div className="col-span-1 bg-white/5 h-full"></div>
          <div className="col-span-1 bg-white/2 h-full"></div>
          <div className="col-span-1 bg-white/5 h-full"></div>
          <div className="col-span-1 bg-white/2 h-full"></div>
        </div>
        <div className="grid grid-cols-12 w-80 gap-2 p-3 mt-2">
          <div className="row col-start-1 col-end-10 flex gap-1">
            <div className="bg-pink w-3 h-3 rounded-full text-[6pt] text-center">
              A
            </div>
            <div className="relative w-full">
              <div className="bg-grey w-full h-3 rounded-full absolute top-0 opacity-20"></div>
              <div className="bg-pink w-40 h-3 rounded-full absolute"></div>
            </div>
          </div>
          <div className="row col-start-2 col-end-11 flex gap-1">
            <div className="bg-blue w-3 h-3 rounded-full text-[6pt] text-center">
              B
            </div>
            <div className="relative w-full">
              <div className="bg-grey w-full h-3 rounded-full absolute top-0 opacity-20"></div>
              <div className="bg-blue w-40 h-3 rounded-full absolute"></div>
            </div>
          </div>
          <div className="row col-start-3 col-end-12 flex gap-1">
            <div className="bg-teal w-3 h-3 rounded-full text-[6pt] text-center">
              C
            </div>
            <div className="relative w-full">
              <div className="bg-grey w-full h-3 rounded-full absolute top-0 opacity-20"></div>
              <div className="bg-teal w-40 h-3 rounded-full absolute"></div>
            </div>
          </div>
        </div>
      </Block>
    </div>
  );
};

const Block5: React.FC = () => {
  return (
    <div className="absolute top-[510px] left-[15%] text-center flex">
      <div className="w-3 h-3 rounded-full bg-yellow mt-5"></div>
      <div className="border-t-2 border-dashed border-grey h-0 w-20 mt-6"></div>
      <div>
        <Block>
          <div className="text-sm font-bold">Cultivate Your Personal Brand</div>
        </Block>
        <div className="m-auto border-l-2 border-dashed border-grey h-5 w-0"></div>
        <div className="m-auto border-t-2 border-dashed border-grey h-0 w-40"></div>
        <div className="flex w-40 m-auto">
          <div className="border-l-2 border-dashed border-grey h-5 w-20"></div>
          <div className="border-l-2 border-dashed border-grey h-5 w-0"></div>
          <div className="border-r-2 border-dashed border-grey h-5 w-20"></div>
        </div>
        <div className="flex w-[198px] m-auto text-center justify-between">
          <div
            className="bg-pink w-10 h-10 rounded-full text-2xl p-2 
            hover:bg-pink/80 transition-all duration-100"
          >
            <AiFillInstagram />
          </div>
          <div className="bg-blue w-10 h-10 rounded-full text-2xl p-2
            hover:bg-blue/80 transition-all duration-100"
          >
            <AiFillLinkedin />
          </div>
          <div className="bg-orange w-10 h-10 rounded-full text-2xl p-2
            hover:bg-orange/80 transition-all duration-100"
          >
            <FaGithub />
          </div>
        </div>
      </div>
    </div>
  );
};

import { Metadata } from "next";
import Image from "next/image";
import Layout from "../layout";
import { createContext, useState } from "react";
import { SurveyWrapper } from "../contexts/SurveyContext";
import Header from "./components/Header";
import { AiFillSignal } from "react-icons/ai";

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
        <h1 className="text-5xl font-extrabold text-center">
          Unleash Your Potential
        </h1>
        <h2 className="text-2xl font-bold italic text-center mt-3">
          with an AI-Powered
          <span className="text-pink">CareerPath Navigator</span>
        </h2>
      </div>
    </Layout>
  );
}

type BlockProps = {
  children: React.ReactNode;
};

const Block: React.FC<BlockProps> = ({ children }) => {
  return (
    <div className="bg-black-secondary border-[1px] border-grey rounded-2xl w-fit h-fit p-4">
      {children}
    </div>
  );
};

const Block1: React.FC = () => {
  return (
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
      <div className="flex text-xs font-bold mt-2">
        <div>Backend</div>
        <div className="ml-auto bg-yellow px-2 rounded-full text-black">
          Node
        </div>
        <div className="ml-auto bg-pink px-2 rounded-full text-black">
          Express
        </div>
      </div>
      <div className="flex text-xs font-bold mt-2">
        <div>Frontend</div>
        <div className="ml-auto bg-pink px-2 rounded-full text-black">
          React
        </div>
      </div>
    </Block>
  );
};

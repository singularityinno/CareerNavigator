import { Metadata } from "next";
import Image from "next/image";
import Layout from "../layout";
import Header from "../components/Header";
import PathwayCard from "./components/PathwayCard";
import { LuGraduationCap } from "react-icons/lu";
import Survey from "./components/Survey";
import { createContext, useState } from "react";
import { SurveyWrapper } from "../contexts/SurveyContext";

export const metadata: Metadata = {
  title: "Career Navigator",
  description: "Unleash Your Potential with an AI-Powered CareerPath Navigator",
};

export default function CareerNavigator() {
  return (
    <Layout>
      <div className="absolute w-full h-[100%] min-h-screen -z-20 ">
        <Image
          src="/blurs.png"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "top" }}
          alt=""
        />
      </div>
      <Header />
      <div className="relative mt-[30vh] mb-[40vh] mx-28 grid grid-cols-4 gap-10">
        <div className="col-span-1 relative">
          <Image
            src="/rocket.png"
            width={200}
            height={200}
            style={{
              borderRadius: "100px",
              marginLeft: "auto",
            }}
            alt=""
          />
        </div>
        <div className="col-span-3 mt-5">
          <h1 className="text-4xl font-bold">
            Unleash Your Potential with an
            <br />
            AI-Powered{" "}
            <span className="text-primary-purple">CareerPath Navigator</span>
          </h1>
          <div className="relative w-auto h-auto">
            <div className="absolute w-[600px] h-full scale-y-[250%] scale-x-100 -z-10 mr-auto -ml-20 max-w-full">
              <Image
                src="/softPurpleBlur.png"
                style={{ objectFit: "fill" }}
                fill
                alt=""
              />
            </div>
            <h2 className="text-md mt-5">
              Interactive Coaching Platform that
              <br />
              <span className="font-bold">
                Revolutionizes Your Professional Growth.
              </span>
            </h2>
          </div>
        </div>
      </div>
      <SurveyWrapper>
        <Survey />
      </SurveyWrapper>
    </Layout>
  );
}

import { Metadata } from "next";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Layout from "../layout";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Career Navigator",
  description:
    "​Unleash Your Potential with an AI-Powered CareerPath Navigator",
};

export default function CareerNavigator() {
  return (
    <Layout>
      <Head>
        <title>Career Navigator</title>
      </Head>
      <div className="absolute w-full h-auto min-h-screen">
        <Image
          src="/blurs.png"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          alt=""
        />
      </div>
      <Header />
      <div className="relative mt-48 mx-28 grid grid-cols-4 gap-10">
        <div className="col-span-1 relative">
          <Image
            src="/rocket.png"
            width={200}
            height={200}
            style={{
              borderRadius: "100px",
              marginLeft: "auto",
            }}
            alt={""}
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
            <div className="absolute w-[600px] h-full scale-y-[250%] scale-x-100 -z-10 mr-auto -ml-20">
              <Image
                src="/softPurpleBlur.png"
                style={{ objectFit: "fill" }}
                layout="fill"
                alt={""}
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
    </Layout>
  );
}

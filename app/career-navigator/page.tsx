import { Metadata } from "next";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Layout from "../layout";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Career Navigator",
  description: "​Unleash Your Potential with an AI-Powered CareerPath Navigator",
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
          alt="Picture of the author"
        />
      </div>
      <Header />
    </Layout>
  );
}

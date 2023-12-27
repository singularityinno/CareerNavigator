import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import BackgroundGradient from "./components/BackgroundGradient";

const open_Sans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Singularity Innovation",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${open_Sans.className} bg-white text-primary-black`}>
        {children}
      </body>
    </html>
  );
}

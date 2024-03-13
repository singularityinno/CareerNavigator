import Link from "next/link";
import React from "react";
import { FaCircle } from "react-icons/fa";

export default function Header() {
  return (
    <div className="px-8 py-6 flex gap-4">
      <FaCircle className="text-yellow text-xl mt-1" />

      <h1 className="p-0 text-lg font-extrabold italic">Singularity</h1>
      <Link href={"/career-navigator"}>
        <div
          className="rounded-full bg-black-secondary px-2 py-1 text-sm font-bold text-grey
        hover:bg-black-secondary/80"
        >
          CareerPath Navigator
        </div>
      </Link>
    </div>
  );
}

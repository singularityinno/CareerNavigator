import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className="grid grid-cols-12 py-4 pr-8 h-20">
      <div className="col-span-1 relative">
        <Image
          src="/singularity.png"
          alt=""
          style={{ objectFit: "contain" }}
          fill
          sizes="100vw"
        />
      </div>
      <h1 className="col-span-1 mt-3 font-extrabold">Singularity</h1>
      <span className="col-span-7"></span>
      <Link className="col-span-3 mt-2" href={"/career-navigator"}>
        <div className="px-3 py-2 border-[1px] border-primary-black rounded-full w-fit h-auto ml-auto font-bold text-sm hover:shadow-lg transition-all duration-200">
          Career Planner
        </div>
      </Link>
    </div>
  );
};

export default Header;

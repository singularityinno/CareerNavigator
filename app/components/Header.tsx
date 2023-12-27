import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className="grid grid-cols-12 py-4 pr-8 h-20">
      <div className="col-span-1 relative">
        <Image
          src="/singularity.png"
          alt="Logo"
          style={{ objectFit: "contain" }}
          layout="fill"
        />
      </div>
      <h1 className="col-span-1 mt-3 font-extrabold">Singularity</h1>
      <span className="col-span-8"></span>
      <Link className="col-span-2 mt-2" href={""}>
        <div className="px-3 py-2 border-[1px] border-black rounded-full w-fit h-auto ml-auto font-bold text-sm">
          Career Planner
        </div>
      </Link>
    </div>
  );
};

export default Header;

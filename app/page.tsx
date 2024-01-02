import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Link href={"/career-navigator"}>
          <div className="px-3 py-2 border-[1px] border-primary-black rounded-full w-fit h-auto ml-auto font-bold text-sm hover:shadow-lg transition-all">
            Career Planner
          </div>
        </Link>
      </div>
    </main>
  );
}

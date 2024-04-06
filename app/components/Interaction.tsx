import Link from "next/link";
import ParallaxBackground from "./ParallaxBackground";

export default function Interaction() {
  return (
    <ParallaxBackground>
      <div className="flex flex-col justify-center items-center h-screen">
        <div>
          <h1 className="text-white font-extrabold md:pb-24 text-5xl md:text-7xl lg:text-9xl ml-4 md:ml-16 cursor-default">
            EDGAR <br /> DAVTIAN PHOTOGRAPHY
          </h1>
        </div>
        <Link href={"/booking"}>
          <button className="bg-black px-4 rounded-xl py-2 bg-opacity-50  mt-16  text-white hover:bg-opacity-80 hover:text-yellow-400 transition duration-150 ease-in-out text-sm md:text-base lg:text-lg">
            BOOK THE PHOTOSHOOT
          </button>
        </Link>
      </div>
    </ParallaxBackground>
  );
}

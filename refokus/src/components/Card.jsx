import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({width}) {
  return (
    <div className={`bg-zinc-800 p-5 rounded-xl text-white ${width}`}>
      <div>
        <div className="w-full flex justify-between items-center">
          <h3>heading</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-10"> jhjsdsddkj sdsjhds dj</h1>
      </div>
      <div className="down w-full mt-60">
        <h1 className="text-6xl font-semibold tracking-tight leading-none"> start a project</h1>
        <button className="rounded-full py-2 px-3 mt-5 border-[1px] border-zinc-50">Contact Us</button>
      </div>
    </div>
  );
}

export default Card;

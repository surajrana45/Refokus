import React from "react";
import { IoIosReturnRight } from "react-icons/io";

function Button({name}) {
  return (
    <div className="w-fit px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center gap-5">
      <sapn className="text-sm font-medium">{name}</sapn>
      <IoIosReturnRight />
    </div>
  );
}

export default Button;

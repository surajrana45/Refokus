import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-4 border-zinc-700">
      <div className="nleft flex items-center">
        <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" />
        <div className="links flex gap-10 ml-20">
          {["Home", "Work", "Culture", "", "News"].map((elem, ind) =>
            elem.length === 0 ? (
              <span className="w-[3px] h-10 bg-zinc-800"></span>
            ) : (
              <a
                className="text-sm text-white flex items-center gap-1"
                href="#"
              >
                {ind === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.25em #00ff19" }}
                    className="inline-block w-2 h-2 rounded-full bg-green-500"
                  ></span>
                )}

                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button name="Get Started"/>
    </div>
  );
};

export default Navbar;

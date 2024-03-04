import React from "react";

function Marquee({ imgurl }) {
  return (
    <div className="w-full flex justify-between mt-10 overflow-hidden">
      {imgurl.map((url) => {
        return <img src={url} alt="img" className="w-40 flex-shrink-0"/>;
      })}
    </div>
  );
}

export default Marquee;

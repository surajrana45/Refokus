import React from "react";

const Work = () => {
  var images = [
    {
      url: "https://images.unsplash.com/photo-1706480883977-355f55e39342?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8",
      top: "41%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1707343844436-37580f155ed2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1682687981674-0927add86f2b?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "60%",
      left: "65%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1709226751884-645027363217?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "60%",
      left: "55%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1707343848873-d6a834b5f9b9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "52%",
      left: "53%",
      isActive: true,
    },
  ];

  return (
    <div className="w-full mt-10 ">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[30vw] text-white leading-none font-medium select-none tracking-tight">
          Work
        </h1>
        <div className="absolute top-0 w-full h-full">
          {images.map((ele, ind) => {
            return (
              ele.isActive && (
                <img
                  className="absolute w-52 h-52 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                  src={ele.url}
                  style={{ top: ele.top, left: ele.left }}
                />
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;

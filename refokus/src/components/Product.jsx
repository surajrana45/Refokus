import React from "react";
import Button from "./Button";

const Product = ({title,desc,live,cas}) => {
  return (
    <div className="w-full py-20 text-white">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="text-6xl capitalize font-semibold">{title}</h1>
        <div className="w-1/3">
          <p className=""> 
            {desc}
          </p>
          <div className="flex gap-9">
          {live && <Button name="get started"/>}
          {cas && <Button name="Case Study"/>}
          </div>
         
        </div>
       
      </div>
    </div>
  );
};

export default Product;

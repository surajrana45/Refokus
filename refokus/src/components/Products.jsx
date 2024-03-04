import React from "react";
import Product from "./Product";

const Products = () => {
  var products = [
    {
      title: "arqitel",
      description:
        "Arque excutive and its employees continue to receive orders for customers and ",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "Arque excutive and its employees continue to receive orders for customers and ",
      live: true,
      case: false,
    },
    {
      title: "YIR202",
      description:
        "Arque excutive and its employees continue to receive orders for customers and ",
      live: true,
      case: false,
    },
    {
      title: "Yahoo",
      description:
        "Arque excutive and its employees continue to receive orders for customers and ",
      live: true,
      case: true,
    },
  ];

  return (
    <div>
      {products.map((ele, ind) => {
        return (
          <Product
            title={ele.title}
            desc={ele.description}
            live={ele.live}
            cas={ele.case}
          />
        );
      })}
    </div>
  );
};

export default Products;

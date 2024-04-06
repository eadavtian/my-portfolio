import React from "react";
import product from "../product";

const ProductBanner = () => {
  return (
    <div className="bg-gray-900 p-16">
      <ul className="w-full flex flex-wrap items-center justify-center">
        {product.map((item) => (
          <li key={item.name} className="text-center px-10 mb-4">
            <div className="mb-2">{item.icon}</div>
            <a
              href={item.path}
              className="text-white text-lg hover:text-gray-300 transition duration-150 ease-in-out"
            >
              {item.name}
            </a>
            <p className="text-gray-300 font-light italic">{item.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductBanner;

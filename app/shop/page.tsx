import React from "react";
import ProductBanner from "../components/ProductBanner";
import PrintsBlock from "../components/PrintsBlock";
import BookBlock from "../components/BookBlock";
import Consultation from "../components/Consultation";

const shop = () => {
  return (
    <div>
      <ProductBanner />
      <PrintsBlock />
      <BookBlock />
      <Consultation />
    </div>
  );
};
export default shop;

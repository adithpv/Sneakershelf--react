import React from "react";
import Title from "./utils/Title";
import Item from "./utils/Item";

const PopularSales = ({ ifTrue, dataAPI: { title, items } }) => {
  return (
    <>
      <div className="app-container">
        <Title title={title} />
        <div
          className={`grid items-center justify-items-center  gap-7 lg:gap-5 mt-7  ${
            ifTrue
              ? "grid-cols-3 xl:grid-cols-2 sm:grid-cols-1"
              : "grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
          }`}
        >
          {items?.map((item, index) => (
            <Item {...item} key={index} ifTrue={ifTrue} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularSales;

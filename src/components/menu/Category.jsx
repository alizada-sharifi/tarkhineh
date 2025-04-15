import React from "react";
// import { createQueryObject } from "../../helper/functions";
import { createQueryObject } from "../../helper/functions";
import { LeftArrow } from "../icons";

export const ulStyle =
  "flex items-center text-[11px] font-medium px-5 gap-x-2 overflow-scroll overflow-y-hidden md:overflow-x-hidden relative text-[#353535] mb-3 md:text-xs md:mb-4";
export const liStyle =
  "flex items-center rounded-[10px] gap-x-1 px-2 py-1.5 bg-[#EDEDED] text-[#353535] md:py-2 lg:px-3 md:rounded-full duration-300 cursor-pointer whitespace-nowrap";
const selectedStyle = `${liStyle} !bg-[#E5F2E9] !text-[#417F56]`;

const Category = ({ query, setQuery }) => {
  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText;
    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject(query, { category }));
  };

  const categories = [
    { id: 1, type: "همه" },
    { id: 2, type: "غذاهای ایرانی" },
    { id: 3, type: "غذاهای غیر ایرانی" },
    { id: 4, type: "پیتزاها" },
    { id: 5, type: "ساندویچ‌ها" },
  ];

  return (
    <ul className={ulStyle} onClick={categoryHandler}>
      {categories.map((item) => (
        <li
          key={item.id}
          className={
            item.id === 1 && !query.category
              ? selectedStyle
              : item.type === query.category
              ? selectedStyle
              : liStyle
          }
        >
          {item.type}
          <LeftArrow />
        </li>
      ))}
    </ul>
  );
};

export default Category;

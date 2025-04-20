import { cn } from "../../helper/common";
import { createQueryObject } from "../../helper/functions";
import { LeftArrow } from "../icons";

const Category = ({ query, setQuery, className }) => {
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
    <ul
      className={cn(
        "flex items-center text-[11px] font-medium px-5 gap-x-2 overflow-scroll overflow-y-hidden md:overflow-x-hidden relative text-[#353535] mb-3 md:text-xs md:mb-4",
        className
      )}
      onClick={categoryHandler}
    >
      {categories.map((item) => (
        <li
          key={item.id}
          className={
            item.id === 1 && !query.category
              ? "flex items-center rounded-xl gap-x-1 px-2 py-1.5  md:py-2 lg:px-3 md:rounded-full duration-300 cursor-pointer whitespace-nowrap  bg-primary-100 !text-primary"
              : item.type === query.category
              ? "flex items-center rounded-xl gap-x-1 px-2 py-1.5 !bg-primary-100 md:py-2 lg:px-3 md:rounded-full duration-300 cursor-pointer whitespace-nowrap  !text-primary"
              : "flex items-center rounded-xl gap-x-1 px-2 py-1.5 bg-neutral-300 text-neutral-800 md:py-2 lg:px-3 md:rounded-full duration-300 cursor-pointer whitespace-nowrap"
          }
        >
          {item.type}
          <LeftArrow className={"fill-neutral-800 size-4"} />
        </li>
      ))}
    </ul>
  );
};

export default Category;

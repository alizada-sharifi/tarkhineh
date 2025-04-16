import { useEffect, useState } from "react";
import { Banner } from "../components/banner";

import Item from "../components/menu/Item";
import axios from "axios";

function Menu() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/foods")
      .then((response) => setFoods(response.data));
  }, []);

  return (
    <>
      <Banner />

      {/* ==========  tabs group section ============ */}
      <div className="bg-neutral-300 py-4 text-neutral-700">
        <div className="container flex items-center gap-4 md:gap-10">
          <button className="text-primary border-b-2 pb-2 border-primary font-medium  text-sm md:text-xl md:font-bold">
            غذای اصلی
          </button>
          <button className="  pb-2 font-medium  text-sm md:text-xl ">
            پیش غذا
          </button>
          <button className=" pb-2  font-medium  text-sm md:text-xl ">
            دسر
          </button>
          <button className="  pb-2 font-medium  text-sm md:text-xl ">
            نوشیدنی
          </button>
        </div>
      </div>

      {/* <Category query={query} setQuery={setQuery} /> */}
      <div className="grid lg:grid-cols-2 gap-8 container py-8">
        {foods.map((food) => {
          return <Item {...food} />;
        })}
      </div>
    </>
  );
}

export default Menu;

import { Banner } from "../components/banner";

import Item from "../components/menu/Item";

function Menu() {
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
      <div className="grid lg:grid-cols-2 gap-4 container">
        <Item />
      </div>
    </>
  );
}

export default Menu;

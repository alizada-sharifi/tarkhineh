import { useEffect, useState } from "react";
import { createQueryObject } from "../../helper/functions";
import { Search } from "../icons";

function SearchProduct({ query, setQuery }) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearch(query.search || "");
  }, [query]);
  const searchHandler = (event) => {
    event.preventDefault();
    setQuery((query) => createQueryObject(query, { search }));
  };
  return (
    <form
      className="flex items-center justify-between px-4 h-9 border border-neutral-400 rounded-md mb-6 md:relative md:top-1 lg:w-[400px] xl:w-[490px] lg:h-10 lg:rounded-lg"
      onSubmit={searchHandler}
    >
      <input
        type="text"
        placeholder="جستجو"
        className="bg-transparent w-full pl-2 outline-none text-neutral-800 text-sm placeholder:text-xs placeholder:text-neutral-800"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button>
        <Search />
      </button>
    </form>
  );
}

export default SearchProduct;

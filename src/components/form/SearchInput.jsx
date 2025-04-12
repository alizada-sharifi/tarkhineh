import { useNavigate } from "react-router";
import Search from "../icons/Search";
import { useState } from "react";

function SearchInput() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  function searchHandler() {
    navigate("/");
    console.log(searchValue);
  }

  return (
    <div className="relative md:hidden ">
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        className="w-full border border-neutral-400 py-2 pr-4 pl-16 rounded-md bg-transparent my-3 outline-none text-neutral-800 text-sm"
        placeholder="جستجو"
      />
      <button
        className="absolute left-6 top-4 cursor-pointer"
        onClick={searchHandler}
      >
        <Search />
      </button>
    </div>
  );
}
export default SearchInput;

import { SearchInput } from "../form";
import Item from "./Item";

function Container() {
  return (
    <div className="container py-8">
      <SearchInput />
      <h2 className="font-bold text-base text-neutral-800 text-center md:text-2xl">
        منوی رستوران
      </h2>

      <Item />
    </div>
  );
}

export default Container;

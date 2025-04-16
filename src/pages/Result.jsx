import React from "react";
import { SearchInput } from "../components/form";
import { NotFound } from "../components/icons";

function Result() {
  return (
    <>
      <div className="container flex flex-col items-center gap-y-10 py-8">
        <SearchInput className="md:block w-96 mx-auto" />
        <NotFound className={"size-72 sm:size-80 md:size-auto"} />
      </div>
    </>
  );
}

export default Result;

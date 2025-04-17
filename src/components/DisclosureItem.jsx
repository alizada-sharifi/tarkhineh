import React, { useState } from "react";
import { cn } from "../helper/common";
import { ArrowDown, ArrowUp } from "../components/icons";

function DisclosureItem({ title, desktopTitle, description }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="py-4 border-b border-neutral-400">
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={cn(
            "text-lg",
            isOpen ? "text-primary font-bold" : "text-neutral-800"
          )}
        >
          <h4 className="md:hidden">{title}</h4>
          <h4 className="hidden md:block">{desktopTitle}</h4>
        </div>
        {isOpen ? <ArrowUp /> : <ArrowDown />}
      </div>

      {isOpen ? (
        <p className="text-xs text-neutral-700 text-justify leading-5 px-7 py-3 md:text-sm md:leading-6 md:pb-4">
          {description}
        </p>
      ) : (
        ""
      )}
    </div>
  );
}

export default DisclosureItem;

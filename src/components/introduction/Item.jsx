import React from "react";

function Item({ icon: Icon, text }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Icon className="fill-white size-6 md:size-12" />
      <p>{text}</p>
    </div>
  );
}

export default Item;

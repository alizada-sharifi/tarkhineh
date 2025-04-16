import React from "react";
import { useDispatch } from "react-redux";
import Rating from "react-rating";
import { decrease, increase, removeItem } from "../../stores/cartSlice";
import { convertToFa } from "../../helper/functions";
import { EmptyStar, FullStar, Trash } from "../icons";

const CartItem = ({ data }) => {
  const dispatch = useDispatch();
  const { title, discountedPrice, quantity, image, description } = data;

  return (
    <div className="flex items-center justify-between py-2 px-2 md:border md:border-neutral-400 md:rounded-lg md:mb-4 md:p-0 md:overflow-hidden md:gap-x-8 md:items-start md:relative">
      <img
        src={image}
        alt={title}
        className="hidden md:block  w-full max-w-[169px] h-[158px]"
      />

      <div className="md:w-full md:pt-[22px]">
        <h3 className="text-neutral-800 text-xs sm:text-sm mb-1 md:font-semibold md:text-xl md:mb-3 lg:mb-2 xl:mb-3">
          {title}
        </h3>
        <p className="hidden md:block text-sm md:pl-7 xl:pl-8">{description}</p>
        <div className="text-neutral-700 text-xs flex items-center gap-x-1 md:absolute md:left-8 md:bottom-[18px] md:text-neutral-800 md:text-lg md:font-medium xl:text-xl">
          <span>{convertToFa(discountedPrice)}</span>
          <span>تومان</span>
        </div>
      </div>

      <div className="text-primary bg-primary-100 py-1 px-1 rounded flex items-center gap-x-2 md:absolute md:bottom-4 md:left-[250px] lg:left-[150px] xl:left-[250px]">
        <button className="text-2xl" onClick={() => dispatch(increase(data))}>
          +
        </button>
        <span>{convertToFa(quantity)}</span>
        {quantity > 1 ? (
          <button onClick={() => dispatch(decrease(data))} className="text-2xl">
            -
          </button>
        ) : (
          <button onClick={() => dispatch(removeItem(data))}>
            <Trash className={"fill-neutral-800"} />
          </button>
        )}
      </div>

      <div className="hidden md:block absolute bottom-[22px] left-[352px] lg:left-[215px] xl:left-[365px]">
        <Rating
          initialRating={4}
          emptySymbol={<EmptyStar />}
          fullSymbol={<FullStar />}
        />
      </div>
    </div>
  );
};

export default CartItem;

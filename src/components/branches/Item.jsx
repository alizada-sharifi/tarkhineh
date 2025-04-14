import { convertToFa } from "../../helper/functions";
import { Button } from "../buttons";
import { EmptyHeart } from "../icons";

function Item({ image, offer, price, discountedPrice, title }) {
  return (
    <div className="gap-x-2 border  border-neutral-400  hover:shadow-card duration-500 rounded-lg overflow-hidden mb-3 md:flex-col md:gap-y-2 md:w-72 ">
      <img src={image} alt="" className=" w-full h-44 md:h-56 object-cover" />

      <div className="info py-1 px-3 w-full bg-white">
        <h3 className="text-sm text-center font-medium md:font-semibold md:text-xl text-neutral-800 mb-2">
          {title}
        </h3>

        <div className="flex  justify-between mb-3">
          <button className="flex gap-1 items-center">
            <EmptyHeart />
            <span className="hidden md:block text-neutral-500 text-xs">
              افزودن به علاقمندی ها
            </span>
          </button>

          <div className="flex gap-2 items-center">
            <span className="text-xs line-through">{convertToFa(price)}</span>
            <span className="bg-error-extralight py-1 px-2 rounded-2xl text-error">
              %{convertToFa(offer)}
            </span>
          </div>
        </div>
        <p className="text-left text-xs text-neutral-800 md:text-base font-medium">
          {convertToFa(discountedPrice)} تومان
        </p>

        <Button className="w-full mt-5">افزودن به سبد خرید</Button>
      </div>
    </div>
  );
}

export default Item;

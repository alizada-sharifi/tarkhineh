import { Link } from "react-router";
import { convertToFa } from "../../helper/functions";
import { EmptyHeart, EmptyStar, FullStar } from "../icons";
import { Button } from "../buttons";
import Rating from "react-rating";

function Item({
  image,
  title,
  description,
  offer,
  price,
  discountedPrice,
  slug,
}) {
  return (
    <div
      className="flex items-center justify-between border border-neutral-400 overflow-hidden rounded-md 
    h-24 lg:h-40 lg:rounded-lg lg:relative"
    >
      <Link to={`/menu/${slug}`}>
        <img src={image} alt={title} className="w-24 h-28 lg:w-44 lg:h-40" />
      </Link>

      <div className="p-2 flex-1 lg:px-3 lg:py-0">
        <div className="flex items-center justify-between text-xs sm:mb-2 lg:mb-3">
          <span className="text-[#353535] sm:text-[12.5px] font-medium lg:text-lg lg:font-bold lg:mt-1">
            <Link to={`/menu/${slug}`}>{title}</Link>
          </span>
          <div className="flex flex-col-reverse sm:flex-row items-center sm:gap-x-2 lg:relative lg:top-9">
            <span className="text-[#ADADAD] line-through lg:text-[15px]">
              {convertToFa(price)}
            </span>
            <span
              className={
                "bg-[#FFF2F2] text-[#C30000] py-[2px] px-[6px] text-[9px] sm:text-xs rounded-[10px] font-medium lg:text-xs "
              }
            >
              %{convertToFa(offer)}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-end sm:justify-between text-xs font-medium text-[#353535] mb-1 lg:text-base lg:mb-8">
          <span className="hidden sm:block text-[10.25px] lg:text-sm">
            <Link to={`/menu/${slug}`}>{description.slice(0, 25)}...</Link>
          </span>
          <div className="flex items-center gap-x-2 font-medium lg:relative lg:top-6 ">
            <span>{convertToFa(discountedPrice)}</span>
            <span>تومان</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-2  sm:gap-x-4 md:gap-6">
            <button className="mt-0.5 lg:absolute lg:left-4 lg:top-4 scale-[1.1] lg:scale-[1.5]">
              <EmptyHeart />
            </button>

            <Rating
              initialRating={4}
              emptySymbol={<EmptyStar />}
              fullSymbol={<FullStar />}
            />

            <Button
              href="/"
              className="bg-[#417F56] text-white border border-[#417F56] rounded sm:rounded-md text-[10px] py-1.5 px-2 sm:p-[9px] font-medium lg:rounded lg:text-sm lg:px-5 xl:px-12 "
            >
              افزودن به سبد خرید
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;

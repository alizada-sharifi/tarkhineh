import React from "react";
import { Link } from "react-router";
import { convertToFa, isInCart, isInFavorite } from "../../helper/functions";
import { useDispatch, useSelector } from "react-redux";
import { EmptyStar, FullHeart, FullStar } from "../icons";
import { disLikeItem } from "../../stores/favoriteSlice";
import { Button } from "../buttons";
import ROUTES from "../../router/routePath";
import { ShowToast } from "../../helper";
import Rating from "react-rating";

function Item({ productData }) {
  const { title, discountedPrice, image, slug, id } = productData;

  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart);
  const favorite = useSelector((state) => state.favorite);
  const isLoggedIn = useSelector((state) => state.auth);

  const addToCart = () => {
    if (isLoggedIn) {
      dispatch(addItem(productData));
      ShowToast("محصول به سبد خرید اضافه شد", "success");
    } else {
      ShowToast("شما ابتدا باید وارد شوید", "error");
    }
  };

  return (
    <div className="flex flex-col gap-y-1 border border-neutral-400 rounded-md md:rounded-lg overflow-hidden">
      <Link to={`/menu/${slug}`}>
        <img
          src={image}
          alt={title}
          className="w-full rounded h-28 md:h-36 object-cover"
        />
      </Link>

      <div className="flex flex-col flex-1 justify-between gap-y-1 p-2 text-neutral-800 ">
        <div className="flex items-center justify-between text-xs sm:text-sm font-medium md:text-lg md:font-semibold">
          <h3>{title}</h3>

          {isInFavorite(favorite, id) && isLoggedIn && (
            <button onClick={() => dispatch(disLikeItem(productData))}>
              <FullHeart />
            </button>
          )}
        </div>

        <div className="flex items-center justify-between text-xs sm:text-sm md:text-base lg:text-[base md:mb-4">
          <div className="flex gap-x-0.5 items-center md:hidden ">
            <FullStar />
            <span>{convertToFa(4)}</span>
          </div>

          <div className="hidden md:block">
            <Rating
              initialRating={4}
              emptySymbol={<EmptyStar />}
              fullSymbol={<FullStar />}
            />
          </div>
          <div className="flex items-center gap-1">
            <span>{convertToFa(discountedPrice)}</span>
            <span>تومان</span>
          </div>
        </div>

        {isInCart(state, id) && isLoggedIn ? (
          <Link to={ROUTES.CART}>
            <Button>مشاهده سبد خرید</Button>
          </Link>
        ) : (
          <Button onClick={addToCart}>افزودن به سبد خرید</Button>
        )}
      </div>
    </div>
  );
}

export default Item;

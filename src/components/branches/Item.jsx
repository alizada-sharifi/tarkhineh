import { convertToFa, isInCart, isInFavorite } from "../../helper/functions";
import { Button } from "../buttons";
import { EmptyHeart, FullHeart, FullStar } from "../icons";
import { useDispatch, useSelector } from "react-redux";
import { ShowToast } from "../../helper";
import { addItem } from "../../stores/cartSlice";
import { Link } from "react-router";
import { likeItem, disLikeItem } from "../../stores/favoriteSlice";

function Item({
  image,
  offer,
  price,
  discountedPrice,
  title,
  id,
  description,
  slug,
}) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const favorite = useSelector((state) => state.favorite);

  const handleButton = () => {
    if (isLoggedIn) {
      dispatch(
        addItem({
          image,
          title,
          description,
          offer,
          price,
          discountedPrice,
          slug,
          id,
        })
      );
      ShowToast("محصول به سبد خرید اضافه شد", "success");
    } else {
      ShowToast("شما ابتدا باید وارد شوید", "error");
    }
  };
  const likeHandler = () => {
    if (isLoggedIn) {
      dispatch(
        likeItem({
          image,
          title,
          description,
          offer,
          price,
          discountedPrice,
          slug,
          id,
        })
      );
    } else {
      ShowToast("برای افزودن به علاقه‌مندی‌ها ابتدا وارد شوید", "error");
    }
  };

  return (
    <div className="gap-x-2 border  border-neutral-400  hover:shadow-card duration-500 rounded-lg overflow-hidden mb-3 md:flex-col md:gap-y-2 md:w-72 ">
      <Link to={`/menu/${slug}`}>
        <img src={image} alt="" className=" w-full h-44 md:h-56 object-cover" />
      </Link>

      <div className="info py-1 px-3 w-full bg-white">
        <Link
          to={`/menu/${slug}`}
          className=" block mt-2 text-sm text-center font-medium md:font-semibold md:text-xl text-neutral-800 mb-2"
        >
          {title}
        </Link>

        <div className="flex  justify-between mb-3">
          {isInFavorite(favorite, id) && isLoggedIn ? (
            <button
              className="flex gap-1 items-center"
              onClick={() =>
                dispatch(
                  disLikeItem({
                    image,
                    title,
                    description,
                    offer,
                    price,
                    discountedPrice,
                    slug,
                    id,
                  })
                )
              }
            >
              <FullHeart />
              <span className="hidden md:block text-neutral-500 text-xs">
                به علاقمندی ها افزوده شد
              </span>
            </button>
          ) : (
            <button onClick={likeHandler} className="flex items-center gap-1">
              <EmptyHeart />
              <span className="hidden md:block text-neutral-500 text-xs">
                افزودن به علاقمندی ها
              </span>
            </button>
          )}

          <div className="flex gap-2 items-center">
            <span className="text-xs line-through">{convertToFa(price)}</span>
            <span className="bg-error-extralight py-1 px-2 rounded-2xl text-error">
              %{convertToFa(offer)}
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-0.5">
            <FullStar />
            {convertToFa(4)}
          </div>
          <p className="text-left text-xs text-neutral-800 md:text-base font-medium mb-3">
            {convertToFa(discountedPrice)} تومان
          </p>
        </div>

        {isInCart(state, id) && isLoggedIn ? (
          <Link to="/cart">
            <Button className=" text-xs py-2 lg:text-sm w-full bg-transparent border border-primary text-primary">
              مشاهده سبد خرید
            </Button>
          </Link>
        ) : (
          <Button
            className="text-xs py-2 w-full lg:text-sm"
            onClick={handleButton}
          >
            افزودن به سبد خرید
          </Button>
        )}
      </div>
    </div>
  );
}

export default Item;

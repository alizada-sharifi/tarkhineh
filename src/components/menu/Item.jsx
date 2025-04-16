import { Link } from "react-router";
import { convertToFa, isInFavorite, isInCart } from "../../helper/functions";
import { EmptyHeart, EmptyStar, FullHeart, FullStar } from "../icons";
import { Button } from "../buttons";
import Rating from "react-rating";
import { likeItem, disLikeItem } from "../../stores/favoriteSlice";
import { addItem } from "../../stores/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { ShowToast } from "../../helper";

function Item({
  image,
  title,
  description,
  offer,
  price,
  discountedPrice,
  slug,
  id,
}) {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const state = useSelector((state) => state.cart);
  const favorite = useSelector((state) => state.favorite);

  const dispatch = useDispatch();

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
    <div
      className="flex items-center justify-between border border-neutral-400 overflow-hidden rounded-md
    h-24 lg:h-40 lg:rounded-lg lg:relative"
    >
      <Link to={`/menu/${slug}`}>
        <img src={image} alt={title} className="w-24 h-28 lg:w-44 lg:h-40" />
      </Link>

      <div className="p-2 flex-1 lg:px-3 lg:py-0">
        <div className="flex items-center justify-between text-xs sm:mb-2 lg:mb-3">
          <span className="text-neutral-800 sm:text-xs font-medium lg:text-lg lg:font-bold lg:mt-1">
            <Link to={`/menu/${slug}`}>{title}</Link>
          </span>
          <div className="flex flex-col-reverse sm:flex-row items-center sm:gap-x-2 lg:relative lg:top-9">
            <span className="text-neutral-500 line-through lg:text-sm">
              {convertToFa(price)}
            </span>
            <span className="bg-neutral-50 text-error py-0.5 px-1.5 text-[10px] sm:text-xs rounded-xl font-medium lg:text-sm">
              %{convertToFa(offer)}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-end xs:justify-between text-xs font-medium text-neutral-800 mb-1 lg:text-base lg:mb-8">
          <span className="hidden xs:block text-xs lg:text-sm">
            <Link to={`/menu/${slug}`}>{description.slice(0, 25)}...</Link>
          </span>
          <div className="flex items-center gap-x-2 font-medium lg:relative lg:top-6 ">
            <span>{convertToFa(discountedPrice)}</span>
            <span>تومان</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-1">
            {isInFavorite(favorite, id) && isLoggedIn ? (
              <button
                className={`mt-0.5 lg:absolute lg:left-4 lg:top-4 !scale-[1.2] lg:!scale-[1.65]`}
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
              </button>
            ) : (
              <button
                className="mt-0.5 lg:absolute lg:left-4 lg:top-4 scale-[1.1] lg:scale-[1.5]"
                onClick={likeHandler}
              >
                <EmptyHeart />
              </button>
            )}

            <div className="hidden xs:block">
              <Rating
                initialRating={4}
                emptySymbol={<EmptyStar />}
                fullSymbol={<FullStar />}
              />
            </div>
          </div>

          {isInCart(state, id) && isLoggedIn ? (
            <Link to="/cart">
              <Button className=" py-1.5 px-2 sm:p-2.5 lg:text-sm lg:px-5 xl:px-12 bg-transparent border border-primary text-primary">
                مشاهده سبد خرید
              </Button>
            </Link>
          ) : (
            <Button
              className="text-xs py-1.5 px-2 sm:p-2.5 lg:text-sm lg:px-5 xl:px-12"
              onClick={handleButton}
            >
              افزودن به سبد خرید
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Item;

import { useEffect, useState } from "react";
import {
  EmptyHeart,
  LeftToggle,
  Trash,
  EmptyStar,
  FullStar,
  ShoppingCart,
  FullHeart,
} from "../components/icons";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router";
import {
  convertToFa,
  isInCart,
  quantityCount,
  isInFavorite,
} from "../helper/functions";
import Rating from "react-rating";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, addItem, removeItem } from "../stores/cartSlice";
import { ClipLoader } from "react-spinners";
import { ShowToast } from "../helper";
import { likeItem, disLikeItem } from "../stores/favoriteSlice";

function FoodDetail() {
  const { slug } = useParams();
  const [foodData, setFoodData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.favorite);

  const cartState = useSelector((state) => state.cart);
  const data = useSelector((store) =>
    store.product.products.find((item) => item.slug === slug)
  );

  const isLoggedIn = useSelector((state) => state.auth);

  useEffect(() => {
    axios
      .get(`https://tarkhineh-api.onrender.com/foods?slug=${slug}`)
      .then((res) => setFoodData(res.data[0]));
  }, [slug]);

  if (!foodData || Object.keys(foodData).length === 0) {
    return (
      <div className="min-h-[calc(100vh_-_535px)] flex justify-center items-center">
        <ClipLoader size={50} color="#417F56" />
      </div>
    );
  }

  if (!data) {
    return <div>محصول مورد نظر پیدا نشد</div>;
  }

  const addToCart = () => {
    dispatch(addItem(data));
    ShowToast("محصول به سبد خرید اضافه شد", "success");
  };

  const likeHandler = () => {
    if (isLoggedIn) {
      dispatch(likeItem(data));
      ShowToast("محصول به علاقه‌مندی ها اضافه شد", "success");
    } else {
      ShowToast("شما ابتدا باید وارد شوید", "error");
    }
  };

  return (
    <>
      {/* ============header section ================ */}
      <div className="bg-primary py-6">
        <div className="container flex mx-auto items-center text-white">
          <LeftToggle
            className="hover:cursor-pointer"
            onClick={() => navigate(-1)}
          />
          <h3 className="font-bold flex-1 text-center pl-10 text-xl">
            جزئیات محصول
          </h3>
        </div>
      </div>

      <div className="container py-8 max-w-[1224px] mx-auto px-5 text-[#353535] md:flex md:gap-x-4">
        <img
          src={foodData.image}
          alt={foodData.title}
          className="w-full rounded-lg mb-[17px] md:w-[350px]"
        />

        <div className="md:flex-1">
          <div className="flex items-center justify-between mb-[17px] px-0.5">
            <h3 className="font-bold text-lg md:text-2xl">{foodData.title}</h3>

            <div className="flex items-center gap-x-4 text-[#717171]">
              {isInFavorite(favorite, data.id) && isLoggedIn ? (
                <button
                  className="scale-[1.65]"
                  onClick={() => dispatch(disLikeItem(data))}
                >
                  <FullHeart />
                </button>
              ) : (
                <button className="scale-[1.5]" onClick={likeHandler}>
                  <EmptyHeart />
                </button>
              )}
              <Link to="/cart" className="scale-[1.5]">
                <ShoppingCart className={"size-4"} />
              </Link>
            </div>
          </div>

          <div className="border border-[#CBCBCB] rounded-lg py-2 px-2.5 font-medium md:pb-3 mb-6">
            <p className="mb-1 text-[15px] md:text-base lg:text-lg">محتویات</p>
            <p className="text-[11px] text-[#717171] pr-1 leading-5 md:leading-6 md:text-xs lg:text-sm">
              {foodData.description}
            </p>
            <div className="flex items-center justify-between py-2 border-y border-[#CBCBCB] my-1.5 text-[15px] md:my-2 md:text-base lg:text-lg lg:my-3">
              <span>امتیاز</span>
              <Rating
                initialRating={4}
                emptySymbol={<EmptyStar />}
                fullSymbol={<FullStar />}
              />
            </div>
            <div className="flex items-center justify-between text-[15px] md:text-base lg:text-lg">
              <span>قیمت</span>
              {foodData.discountedPrice
                ? `${convertToFa(foodData.discountedPrice)} تومان`
                : "ناموجود"}
            </div>
          </div>

          {/* ======================== */}
          <div className="flex items-center gap-x-2.5 justify-center md:justify-end">
            {isInCart(cartState, data.id) && isLoggedIn ? (
              <button
                onClick={() => dispatch(increase(data))}
                className="bg-[#417F56] text-white w-6 h-6 rounded mt-1 font-bold flex items-center justify-center md:w-8 md:h-8 scale-110"
              >
                +
              </button>
            ) : (
              <button
                className="bg-[#417F56] text-white rounded-md text-xs font-medium py-2.5 px-[35px] md:text-sm lg:py-2.5 lg:px-5 xl:px-12"
                onClick={addToCart}
              >
                افزودن به سبد خرید
              </button>
            )}
            {quantityCount(cartState, data.id) > 0 && isLoggedIn && (
              <span className="text-[#417F56] font-semibold mt-1 md:text-lg">
                {convertToFa(quantityCount(cartState, data.id))}
              </span>
            )}
            {quantityCount(cartState, data.id) === 1 && isLoggedIn && (
              <button
                onClick={() => dispatch(removeItem(data))}
                className="bg-[#417F56] text-white w-6 h-6 rounded mt-1 font-bold flex items-center justify-center md:w-8 md:h-8 scale-110"
              >
                <Trash />
              </button>
            )}
            {quantityCount(cartState, data.id) > 1 && isLoggedIn && (
              <button
                onClick={() => dispatch(decrease(data))}
                className="bg-[#417F56] text-white w-6 h-6 rounded mt-1 font-bold flex items-center justify-center md:w-8 md:h-8 scale-110"
              >
                -
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodDetail;

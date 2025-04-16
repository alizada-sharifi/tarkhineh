import { useEffect, useState } from "react";
import { EmptyHeart, LeftToggle } from "../components/icons";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router";
import { convertToFa } from "../helper/functions";
import Rating from "react-rating";
import { EmptyStar, FullStar, ShoppingCart } from "../components/icons";
import ROUTES from "../router/routePath";
import { Button } from "../components/buttons";

function FoodDetail() {
  const slug = useParams().slug;
  const [foodData, setFoodData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/foods?slug=${slug}`)
      .then((res) => setFoodData(res.data[0]));
  }, [slug]);

  return (
    <>
      {/* ============header section ================ */}
      <div className="bg-primary py-6">
        <div className="container flex mx-auto items-center text-white">
          <LeftToggle
            className={"hover:cursor-pointer"}
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
          className="w-full  rounded-lg mb-[17px] md:w-[350px]"
        />

        <div className="md:flex-1 ">
          <div className="flex items-center justify-between mb-[17px] px-0.5">
            <h3 className="font-bold text-lg md:text-2xl">{foodData.title}</h3>

            <div className="flex items-center gap-x-4 text-[#717171]">
              <EmptyHeart className={"size-6"} />
              <Link to={ROUTES.CART} className="scale-[1.5]">
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

          <div className="text-end">
            <Button>افزودن به سبد خرید</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodDetail;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../stores/productSlice";
import Title from "../Title";
import Item from "./Item";
import { LeftArrow, RightArrow } from "../icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { cn } from "../../helper/common";
import { ClipLoader } from "react-spinners";
import { useState } from "react";

function Container({ className, id, titleClassName, title, index }) {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const [indexRange, setIndexRange] = useState(index);

  const productsToDisplay = products.slice(indexRange[0], indexRange[1]);

  if (loading) {
    return (
      <div className="min-h-[calc(100vh_-_535px)] flex justify-center items-center">
        <ClipLoader size={50} color="#417F56" />
      </div>
    );
  }

  if (error) {
    return (
      <h2 className="container max-w-[1224px] mx-auto h-screen text-2xl text-red-500">
        {error}
      </h2>
    );
  }

  return (
    <div className={className}>
      <div className="relative container py-8 ">
        <Title text={title} className={cn("text-start mb-4", titleClassName)} />

        {/* ==================== buttons ==================== */}
        <div className={`absolute top-1/2 right-0 z-10 translate-y-[-50%]`}>
          <button
            className={`prev-btn-${id} bg-white shadow p-2 rounded-r hover:bg-gray-100`}
          >
            <RightArrow className="fill-black text-center size-6" />
          </button>
        </div>

        <div className={`absolute top-1/2 left-0 z-10 translate-y-[-50%]`}>
          <button
            className={`next-btn-${id} bg-white shadow p-2 rounded-l hover:bg-gray-100`}
          >
            <LeftArrow className="fill-black text-center" />
          </button>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          dir="rtl"
          loop={true}
          navigation={{
            nextEl: `.next-btn-${id}`,
            prevEl: `.prev-btn-${id}`,
          }}
          spaceBetween={16}
          slidesPerView={1.5}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {productsToDisplay.map((item, index) => (
            <SwiperSlide key={index}>
              <Item {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Container;

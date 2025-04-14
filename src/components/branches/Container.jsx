import Title from "../Title";
import Item from "./Item";
import { LeftArrow, RightArrow } from "../icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { cn } from "../../helper/common";

function Container({ className, data, id, titleClassName, title }) {
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
          {data.map((item, index) => (
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

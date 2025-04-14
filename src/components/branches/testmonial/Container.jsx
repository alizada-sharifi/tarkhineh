import Title from "../../Title";
import Item from "./Item";
import { LeftArrow, RightArrow } from "../../icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { cn } from "../../../helper/common";
import user from "../../../assets/images/person-1.jpg";
import user2 from "../../../assets/images/person-2.jpg";
import user3 from "../../../assets/images/person-3.jpg";

function Container({ className, id, titleClassName, title }) {
  const data = [
    {
      userImage: user,
      name: "شریف نیازی",
      date: "۲۳ اسفند ۱۴۰۱",
      description:
        "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. ",
    },
    {
      userImage: user2,
      name: "زهرا کریمی",
      date: "۲۳ فروردین ۱۴۰۳",
      description:
        "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. ",
    },
    {
      userImage: user3,
      name: "علی رضایی",
      date: "۲۳ اردبیهشت ۱۴۰۲",
      description:
        "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. ",
    },
  ];
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
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            1024: { slidesPerView: 2.2 },
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

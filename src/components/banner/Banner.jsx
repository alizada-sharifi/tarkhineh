import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import { Button } from "../buttons";
import ROUTES from "../../router/routePath";

const Banner = () => {
  const slideData = [
    {
      text: " تجربه غذای سالم و گیاهی به سبک ترخینه",
      img: "bg-slider",
    },
    {
      text: "طعم بی نظیر طبیعت!",
      img: "bg-slider2",
    },
    {
      text: "لذت غذای سالم را با ترخینه تجربه کنید!",
      img: "bg-slider3",
    },
  ];
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="w-full h-44 md:h-80"
      >
        {slideData.map((slide, index) => {
          return (
            <SwiperSlide
              key={index}
              className={`text-center py-16 h-44 bg-slider bg-center md:py-32 md:h-80 ${slide.img}`}
            >
              <p className="text-sm sm:text-base text-primary-100 font-bold md:text-3xl lg:text-4xl mb-5 md:mb-10">
                {slide.text}
              </p>
              <Button className="w-auto" href={ROUTES.MENU}>
                سفارش آنلاین غذا
              </Button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Banner;

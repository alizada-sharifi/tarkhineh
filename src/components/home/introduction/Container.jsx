import { useNavigate } from "react-router";
import ROUTES from "../../../router/routePath";
import { Button } from "../../buttons";
import { Diagram, HomeWifi, LeftArrow, MenuBoard, User } from "../../icons";
import Item from "./Item";

function Container() {
  const navigate = useNavigate();
  const data = [
    {
      icon: User,
      text: "پرسنلی مجرب و حرفه‌ای",
    },
    {
      icon: Diagram,
      text: "کیفیت بالای غذا",
    },
    {
      icon: HomeWifi,
      text: "محیطی دلنشین و آرام",
    },
    {
      icon: MenuBoard,
      text: "منوی متنوع",
    },
  ];
  return (
    <div className="bg-chalos bg-cover bg-center">
      <div
        className="w-full h-full bg-black/70 py-10 backdrop-blur-sm
"
      >
        <div className="container text-white grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h2 className="text-base md:font-bold md:text-2xl">
              رستوران‌های زنجیره‌ای ترخینه
            </h2>
            <p className="text-xs md:text-lg text-justify ">
              مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
              ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
              رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
              پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور
              شان شما عزیزان ارائه دهیم.
            </p>
            <Button
              className="flex bg-transparent border w-auto mr-auto items-center gap-2"
              onClick={() => navigate(ROUTES.ABOUT)}
            >
              <span>اطلاعات بیشتر</span>
              <LeftArrow />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-y-10">
            {data.map((item, index) => {
              return <Item {...item} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;

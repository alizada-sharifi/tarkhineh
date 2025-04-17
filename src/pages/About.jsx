import React from "react";
import { Banner2 } from "../components/banner";
import { Item } from "../components/about";
import { Diagram, HomeWifi, MenuBoard, User } from "../components/icons";

function About() {
  const data = [
    {
      Icon: User,
      title: "پرسنلی مجرب و حرفه‌ای",
    },
    {
      Icon: Diagram,
      title: "کیفیت بالای غذاها",
    },
    {
      Icon: HomeWifi,
      title: "محیطی دلنشین و آرام",
    },
    {
      Icon: MenuBoard,
      title: "منوی متنوع",
    },
  ];
  return (
    <>
      <Banner2
        className={"bg-aboutBanner"}
        title={"درباره ترخینه بیشتر بدانید!"}
      />

      <div className="container mx-auto pt-10 mb-4">
        <h2 className="text-neutral-800 px-5  pb-1  font-bold md:text-xl lg:text-2xl xl:text-3xl lg:pb-6">
          درباره ما
        </h2>
        <div className="text-neutral-700 px-5 content text-xs  text-justify mb-4  md:text-base xl:text-lg ">
          <div className="bg-aboutUs bg-cover bg-center float-left w-36 h-28 rounded mr-4 md:w-96 md:h-72 lg:w-[600px] lg:h-[492px] lg:mr-6"></div>
          <div>
            <p>
              رستوران‌های زنجیره‌ای ترخینه در سال ۱۳۶۸ افتتاح گردیده‌اند و در طی
              این سال‌ها همواره با ارائه غذاهای باکیفیت و سرویس سریع و به موقع
              در تلاش برای جلب رضایت مشتریان خود بوده‌اند. در طی این سال‌ها
              اولویت جلب رضایت مشتریان بوده است. دراین خصوص ترخینه همیشه در تلاش
              بوده تا در طی این زمان‌ها کیفیت غذاهای خود را در بهترین حالت نگه
              داشته و حتی با نوسانات قیمت‌های مواد اولیه در بازار قیمت خود را
              ثابت نگه داشته است. ترخینه شعبات خودرا افتتاح کرده که بسیار شیک و
              مدرن می‌باشند و برای برگزاری جشن‌های کوچک و بزرگ شما مشتریان عزیز
              توانایی پذیرایی با کیفیت بالا را دارند. سالن پذیرایی شعبات در دو
              طبقه مجزا به همراه راه پله مدرن و آسانسور برای افراد کم‌توان و
              سالخورده آماده ارائه سرویس به شما عزیزان می‌باشند. چشم انداز: در
              آینده ای نزدیک تالار پذیرایی شعبات راه اندازی شده و آماده برگزاری
              جشن‌ها و مراسم‌های بزرگ شما خواهند بود . به امید آن روز که همه
              ایرانیان سالم و سلامت باشند.
            </p>
          </div>
        </div>
      </div>

      <div className="px-5 bg-neutral-300 py-4 md:py-8 ">
        <div className="container grid grid-cols-2 gap-4 md:grid-cols-4">
          {data.map((item) => {
            return <Item {...item} />;
          })}
          
        </div>
      </div>
    </>
  );
}

export default About;

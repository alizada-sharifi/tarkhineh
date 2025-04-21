import { Banner2 } from "../components/banner";
import { Advice, RequestForm } from "../components/franchise";
import { Bank, Book, Diagram2, Rectangle, Wallet3 } from "../components/icons";
import Title from "../components/Title";

function Franchise() {
  const featureInfo = [
    {
      Icon: Bank,
      text: "بیش از 20 شعبه فعال در سراسر کشور",
    },
    {
      Icon: Wallet3,
      text: "تسهیلات راه‌اندازی رستوران و تجهیز آن",
    },
    {
      Icon: Diagram2,
      text: "طرح‌های تشویقی ارتقای فروش",
    },
    {
      Icon: Book,
      text: "اعطای دستورالعمل پخت غذاها",
    },
  ];
  const benefitInfo = [
    "استفاده از برند شناخته شده ترخینه",
    "مشاوره در امور حقوقی، مالی و مالیاتی",
    "به حداقل رساندن ریسک سرمایه گذاری",
    "پشتیبانی بازاریابی و منابع انسانی",
    "تسریع روند بازگشت سرمایه",
    "دریافت مشاوره جهت تامین مواد اولیه و تجهیزات",
    "مشاوره های تخصصی جهت مدیریت رستوران",
    "طرح های تشویقی برای ارتقا فروش",
  ];
  return (
    <>
      <Banner2
        title={"همین الان به خانواده بزرگ ترخینه بپیوندید!"}
        className={"bg-franchiseBanner"}
      />

      <div className="container py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-6 border-b border-neutral-400">
          {featureInfo.map((feature, index) => {
            return (
              <div
                className="flex flex-col gap-y-3 justify-center items-center"
                key={index}
              >
                <feature.Icon />
                <p className="text-sm md:text-base md:w-2/3 text-center">
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="py-6 border-b border-neutral-400">
          <Title text={"مزیت دریافت نمایندگی"} />
          <div className="grid md:grid-cols-2 gap-3 mt-6 justify-center ">
            {benefitInfo.map((item, index) => {
              return (
                <div className="flex items-center gap-2" key={index}>
                  <Rectangle />
                  <p className="text-neutral-800 text-base md:text-lg">
                    {item}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <Advice />

        <RequestForm />
      </div>
    </>
  );
}

export default Franchise;

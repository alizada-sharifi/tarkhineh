import React from "react";
import { Banner2 } from "../components/banner";
import { Item } from "../components/contact";

function Contact() {
  const branchesInfo = [
    {
      id: 1,
      className: "bg-ekbatan",
      title: "شعبه اکباتان",
      address: "آدرس: شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
      phone: "شماره تماس:۰۲۱-۵۴۸۹۱۲۵۰-۵۱",
      phone2: "شماره تماس ۲: ۱۲۵۵ ۵۴۸۹ -۰۲۱",
      workTime: "ساعت کاری: همه روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل",
    },
    {
      id: 2,
      className: "bg-chalos",
      title: "شعبه چالوس",
      address:
        "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی",
      phone: "شماره تماس:۰۲۱-۵۴۸۹۱۲۵۲-۵۳",
      phone2: "شماره تماس ۲: ۱۲۵۵ ۵۴۸۹ -۰۲۱",
      workTime: "ساعت کاری: همه روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل",
    },

    {
      id: 3,
      className: "bg-aghdasieh",
      title: "شعبه اقدسیه",
      address: "خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸",
      phone: "شماره تماس:۰۲۱-۵۴۸۹۱۲۵۴-۵۵",
      phone2: "شماره تماس ۲: ۱۲۵۵ ۵۴۸۹ -۰۲۱",
      workTime: "ساعت کاری: همه روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل",
    },
    {
      id: 4,
      className: "bg-vanak",
      title: "شعبه ونک",
      address: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶",
      phone: "شماره تماس:۰۲۱-۵۴۸۹۱۲۵۶-۵۷",
      phone2: "شماره تماس ۲: ۱۲۵۵ ۵۴۸۹ -۰۲۱",
      workTime: "ساعت کاری: همه روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل",
    },
  ];
  return (
    <>
      <Banner2
        title={"با ترخینه در تماس باشید."}
        className={"bg-contactBanner"}
      />

      <div className="container mx-auto my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-x-4 ">
        {branchesInfo.map((branch) => {
          return <Item {...branch} />;
        })}
      </div>
    </>
  );
}

export default Contact;

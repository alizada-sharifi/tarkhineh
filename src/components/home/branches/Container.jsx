import Title from "../../Title";
import Item from "./Item";

function Container() {
  const itemsData = [
    {
      image: "bg-ekbatan",
      title: "شعبه اکباتان",
      address: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
    },
    {
      image: "bg-chalos",
      title: "شعبه چالوس",
      address:
        "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی",
    },
    {
      image: "bg-aghdasieh",
      title: "شعبه اقدسیه",
      address: "خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸",
    },
    {
      image: "bg-vanak",
      title: "شعبه ونک",
      address: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶",
    },
  ];
  return (
    <div className="py-10 container">
      <Title text="ترخینه گردی" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-8">
        {itemsData.map((item, index) => {
          return <Item {...item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Container;

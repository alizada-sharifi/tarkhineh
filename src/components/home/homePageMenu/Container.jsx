import Item from "./Item";
import mainCourse from "../../../assets/images/mainCourse.png";
import appetizer from "../../../assets/images/appetizer.png";
import dessert from "../../../assets/images/dessert.png";
import drink from "../../../assets/images/drink.png";
import Title from "../../Title";

function Container() {
  const itemsData = [
    {
      image: mainCourse,
      title: "غذای اصلی",
    },
    {
      image: appetizer,
      title: "پیش غذا",
    },
    {
      image: dessert,
      title: "دسر",
    },
    {
      image: drink,
      title: "نوشیدنی",
    },
  ];

  return (
    <div className="container pb-8 md:pt-8 md:pb-16">
      <Title text="  منوی رستوران" />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6  gap-y-10 mt-10">
        {itemsData.map((item, index) => {
          return <Item {...item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Container;

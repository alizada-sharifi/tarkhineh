import { SearchInput } from "../../form";
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
    <div className="container py-16">
      <SearchInput />

      <Title text="  منوی رستوران" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-10">
        {itemsData.map((item, index) => {
          return <Item {...item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Container;

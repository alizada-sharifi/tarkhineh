import { useNavigate } from "react-router";
import { Button } from "../../buttons";
import { Gallery, LeftArrow } from "../../icons";
import ROUTES from "../../../router/routePath";

function Item({ title, address, image }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(ROUTES.BRANCH)}
      className=" group flex items-center gap-x-2 border  border-neutral-400  hover:shadow-card duration-500 rounded-lg overflow-hidden mb-3 md:flex-col md:gap-y-2 md:w-72"
    >
      <div
        className={`${image} bg-cover bg-center w-36 h-20 md:w-72 md:h-36 lg:h-56 relative`}
      >
        <div className="w-full h-full bg-black/60  justify-center items-center hidden md:group-hover:flex">
          <Gallery />
        </div>
      </div>
      <div className="p-1 md:pb-2 lg:px-2.5 lg:pb-4 w-44 md:w-auto text-center">
        <h4 className=" text-neutral-800 font-medium text-xs sm:text-sm mb-1 md:text-base md:font-bold md:mb-2 lg:text-lg xl:text-xl">
          {title}
        </h4>
        <p className="text-xs text-neutral-700 leading-4 sm:leading-5 md:text-xs md:font-medium lg:text-sm lg:leading-6 xl:text-sm group-hover:mb-4">
          {address}
        </p>

        <Button
          className="hidden group-hover:flex bg-transparent border border-primary text-primary mx-auto"
          onClick={() => navigate(ROUTES.BRANCH)}
        >
          <span>صفحه شعبه</span>
          <LeftArrow />
        </Button>
      </div>
    </div>
  );
}

export default Item;

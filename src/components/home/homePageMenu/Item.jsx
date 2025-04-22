import { Button } from "../../buttons";
import ROUTES from "../../../router/routePath";

function Item({ image, title }) {
  return (
    <div className="relative flex flex-col items-center justify-center mx-2 xl:w-[16em] xl:mx-6">
      <img
        src={image}
        alt={title}
        className="w-[7em] sm:w-[7.5em] absolute top-0 md:w-[9em] lg:w-[12em] xl:w-[14.5em]"
      />
      <div className=" w-[7.5em] sm:w-[9.5em] h-[4.5em] sm:h-[5em] bg-transparent border border-primary mt-[3.5em] shadow-lg rounded-md md:rounded-lg md:w-[10.5em] md:h-[7em] lg:w-[14.5em] lg:h-[8em] lg:mt-[6em] xl:w-[16.75em] xl:h-[9.5em] "></div>
      <Button
        className=" absolute -bottom-5 shadow-lg md:py-2.5 md:px-6 lg:text-lg lg:px-7 xl:-bottom-8"
        href={ROUTES.MENU}
      >
        {title}
      </Button>
    </div>
  );
}

export default Item;

import ROUTES from "../../router/routePath";
import { Button } from "../buttons";

function EmptyCart() {
  return (
    <div className="relative min-h-[calc(100vh_-_365px)] border border-neutral-400 rounded-lg  flex items-center justify-center md:min-h-[calc(100vh_-_442px)]">
      <div className="bg-emptyPage  bg-cover bg-center w-48 h-58 flex items-center justify-center md:w-[325px] md:h-[313px]">
        <p className="text-xs absolute left-0 right-0 top-[48.75%] text-center font-medium text-neutral-700 md:text-xl">
          شما در حال حاضر هیچ سفارشی ثبت نکرده‌اید!
        </p>
        <Button
          className="border border-primary text-primary bg-white  text-xs rounded relative top-11 md:font-medium md:text-[17px] md:px-[43px] md:py-[11px] md:top-[70px]"
          href={ROUTES.MENU}
        >
          منوی رستوران
        </Button>
      </div>
    </div>
  );
}

export default EmptyCart;

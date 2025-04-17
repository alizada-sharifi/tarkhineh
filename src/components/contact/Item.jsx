import { cn } from "../../helper/common";
import ROUTES from "../../router/routePath";
import { Button } from "../buttons";
function ContactItem({ className, title, address, phone, phone2, workTime }) {
  return (
    <div className="flex flex-col md:flex-row h-72 justify-center md:items-center border border-neutral-400 lg:duration-500 hover:shadow-lg rounded-lg overflow-hidden mb-5 ">
      <div
        className={cn(
          "bg-cover bg-center h-1/2 w-full md:w-1/2 md:h-full",
          className
        )}
      ></div>

      <div className="flex flex-col items-center text-center gap-y-1 text-neutral-700 text-xs py-3 px-2 sm:px-1 w-full md:w-1/2 md:gap-y-2 md:text-sm">
        <h4 className="text-neutral-800 font-medium mt-2 text-xs sm:text-sm  md:text-base  md:mb-2 lg:text-lg xl:text-[22px]">
          {title}
        </h4>
        <div className="flex-col items-center  flex md:mt-3">
          <p>{address}</p>
          <p>{phone}</p>
          <p>{phone2}</p>
          <p>{workTime}</p>
          <div className="flex gap-x-4 mt-3 ">
            <Button
              className="bg-transparent border border-primary text-primary"
              href={ROUTES.BRANCH}
            >
              صفحه شعبه
            </Button>
            <Button>دیدن در نقشه</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactItem;

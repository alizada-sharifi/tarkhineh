import { cn } from "../../helper/common";

function Banner2({ className, title }) {
  return (
    <div className={cn("text-center  bg-cover bg-center  ", className)}>
      <div className="w-full  bg-black/60 md:h-80 h-44  py-16 md:py-32">
        <p className="font-bold text-base text-primary-100 md:text-4xl">
          {title}
        </p>
      </div>
    </div>
  );
}

export default Banner2;

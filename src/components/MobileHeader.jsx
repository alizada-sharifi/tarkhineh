import { useNavigate } from "react-router";
import { RightArrow, Trash } from "./icons";
import { cn } from "../helper/common";

function MobileHeader({ title, className, iconClassName }) {
  const navigate = useNavigate();
  return (
    <div
      className={cn(
        "flex items-center justify-between md:hidden mb-4 ",
        className
      )}
    >
      <RightArrow
        className={cn("fill-black size-5", iconClassName)}
        onClick={() => navigate(-1)}
      />

      <span className="font-bold text-base text-neutral-800">{title}</span>
    </div>
  );
}

export default MobileHeader;

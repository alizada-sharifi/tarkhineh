import { cn } from "../../helper/common";

function FullHeart({ className, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      className={cn("fill-error", className)}
      {...props}
    >
      <path d="M10.959 2.067a3.7 3.7 0 0 0-2.96 1.486 3.7 3.7 0 0 0-2.96-1.486c-2.047 0-3.707 1.666-3.707 3.726 0 .794.127 1.527.347 2.207 1.053 3.333 4.3 5.327 5.906 5.873.227.08.6.08.827 0 1.607-.546 4.853-2.54 5.907-5.873.22-.68.346-1.413.346-2.207 0-2.06-1.66-3.726-3.706-3.726Z" />
    </svg>
  );
}

export default FullHeart;

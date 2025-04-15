import { cn } from "../../helper/common";

function EmptyStar({ className, ...props }) {
  return (
    <svg
      width="23"
      height="22"
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("fill-none", className)}
      {...props}
    >
      <path
        d="M11.5 1.61804L13.7186 8.4463L13.8309 8.7918H14.1942H21.3738L15.5654 13.0119L15.2715 13.2254L15.3837 13.5709L17.6024 20.3992L11.7939 16.1791L11.5 15.9656L11.2061 16.1791L5.39763 20.3992L7.61627 13.5709L7.72853 13.2254L7.43464 13.0119L1.62616 8.7918H8.80583H9.1691L9.28136 8.4463L11.5 1.61804Z"
        stroke="#F4B740"
      />
    </svg>
  );
}

export default EmptyStar;

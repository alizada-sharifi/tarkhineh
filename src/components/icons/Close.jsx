// import {cn} from '../../helpers/common';
import { cn } from "../../helper/common";

function Close({ className, ...props }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("fill-neutral-600", className)}
      {...props}
    >
      <rect
        x="5.31348"
        y="7.41406"
        width="2"
        height="16"
        rx="1"
        transform="rotate(-45 5.31348 7.41406)"
      />
      <rect
        x="16.3135"
        y="6"
        width="2"
        height="16"
        rx="1"
        transform="rotate(45 16.3135 6)"
      />
    </svg>
  );
}

export default Close;

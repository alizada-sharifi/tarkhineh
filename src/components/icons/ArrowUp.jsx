import { cn } from "../../helper/common";

function ArrowUp({ className, ...props }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("fill-primary", className)}
      {...props}
    >
      <path d="M19.92 15.8C19.73 15.8 19.54 15.73 19.39 15.58L12.87 9.05996C12.39 8.57996 11.61 8.57996 11.13 9.05996L4.61002 15.58C4.32002 15.87 3.84002 15.87 3.55002 15.58C3.26002 15.29 3.26002 14.81 3.55002 14.52L10.07 7.99996C11.13 6.93996 12.86 6.93996 13.93 7.99996L20.45 14.52C20.74 14.81 20.74 15.29 20.45 15.58C20.3 15.72 20.11 15.8 19.92 15.8Z" />
    </svg>
  );
}

export default ArrowUp;

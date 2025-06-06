import { cn } from "../../helper/common";

function LeftToggle({ className, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      className={cn("fill-white", className)}
      {...props}
    >
      <path d="M14.43 18.82c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06L19.44 12 13.9 6.46a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l6.07 6.07c.29.29.29.77 0 1.06l-6.07 6.07c-.15.15-.34.22-.53.22Z" />
      <path d="M20.33 12.75H3.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16.83c.41 0 .75.34.75.75s-.34.75-.75.75Z" />
    </svg>
  );
}

export default LeftToggle;

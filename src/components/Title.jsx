import { cn } from "../helper/common";

function Title({ text, className }) {
  return (
    <h2
      className={cn(
        "font-bold text-base text-neutral-800 text-center md:text-2xl",
        className
      )}
    >
      {text}
    </h2>
  );
}

export default Title;

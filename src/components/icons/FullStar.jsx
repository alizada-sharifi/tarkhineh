import { cn } from "../../helper/common";

function FullStar({ className, ...props }) {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("fill-warning-light", className)}
      {...props}
    >
      <path
        d="M12.5 0L15.1942 8.2918H23.9127L16.8593 13.4164L19.5534 21.7082L12.5 16.5836L5.44658 21.7082L8.14074 13.4164L1.08732 8.2918H9.80583L12.5 0Z"
        fill="#F4B740"
      />
    </svg>
  );
}

export default FullStar;

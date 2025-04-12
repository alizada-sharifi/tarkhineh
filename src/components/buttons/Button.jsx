import { Link } from "react-router";
import { cn } from "../../helper/common";

function Button(props) {
  if (props.href) {
    const { href, ...rest } = props;
    return (
      <Link
        to={href}
        {...rest}
        className={cn(
          "bg-primary py-1.5 px-3 text-xs font-medium text-white rounded-md md:py-2 md:px-6 md:text-base ",
          props.className
        )}
      >
        {props.children}
      </Link>
    );
  }

  return (
    <button
      type="submit"
      {...props}
      className={cn(
        "bg-primary py-1.5 px-3 text-xs font-medium text-white rounded-md md:py-2 md:px-6 md:text-base ",
        props.className
      )}
    >
      {props.children}
    </button>
  );
}

export default Button;

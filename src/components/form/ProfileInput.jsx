import { useFormContext } from "react-hook-form";
import { cn } from "../../helper/common";

function Input({
  name = "",
  placeholder = "",
  type = "text",
  className = "",
  wrapperClassName = "",
  isDisabled,
  value,
  dir,
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={cn("space-y-0.5 relative flex-1", wrapperClassName)}>
      <input
        dir={dir}
        defaultValue={value}
        {...register(name)}
        type={type}
        disabled={isDisabled}
        className={cn(
          "w-full outline-none disabled:bg-white border  text-sm rounded-md px-3 py-2 md:py-2 mb-4 md:text-base duration-500",
          className,
          {
            "border-error focus:border-error": errors[name],
          }
        )}
      />
      <span className=" md:block text-neutral-700 text-sm absolute bg-white right-3 -top-3.5 px-2 ">
        {placeholder}
      </span>
      {errors[name] && (
        <p className="text-xs text-error">{errors[name].message}</p>
      )}
    </div>
  );
}

export default Input;

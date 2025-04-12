import { useFormContext } from "react-hook-form";
import { cn } from "../../helper/common";

function Input({
  name = "",
  placeholder = "",
  type = "text",
  className = "",
  wrapperClassName = "",
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={cn("space-y-1", wrapperClassName)}>
      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className={cn(
          "block w-full text-sm text-neutral-700 placeholder:text-xs placeholder:text-neutral-700 outline-none border border-neutral-400 p-2 rounded-md focus:border-primary-600",
          className,
          {
            "border-error focus:border-error": errors[name],
          }
        )}
      />
      {errors[name] && (
        <p className="text-xs text-error">{errors[name].message}</p>
      )}
    </div>
  );
}

export default Input;

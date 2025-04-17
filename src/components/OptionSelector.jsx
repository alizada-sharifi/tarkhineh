function OptionSelector({
  FirstIcon,
  SecondIcon,
  ThirdIcon,
  Title,
  secondTitle,
  secondDesc,
  ThirdTitle,
  ThirdDesc,
  method,
  setMethod,
}) {
  return (
    <div className="border border-neutral-400 rounded-lg p-3 lg:py-6 flex lg:items-center flex-col gap-y-3 lg:flex-row">
      <div className="flex items-center gap-1 pb-3 border-b border-neutral-400 lg:border-none lg:pb-0">
        <FirstIcon className={"size-5 lg:size-7"} />
        <span className="text-sm text-neutral-800 lg:text-base font-medium">
          {Title}
        </span>
      </div>

      <div className="pr-2 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-evenly flex-1">
        <label>
          <div className="flex items-center gap-x-1 text-neutral-700 text-xs sm:text-sm lg:text-base lg:font-medium lg:cursor-pointer">
            <input
              type="radio"
              checked={method === "primary"}
              onChange={() => setMethod("primary")}
              className="appearance-none w-3.5 h-3.5 rounded-full ring-1 ring-neutral-400 ring-offset-1 checked:bg-success duration-200 ml-2"
            />
            <div className="flex flex-col text-neutral-700">
              <span className="text-sm">{secondTitle}</span>
              <span className="hidden lg:block text-[10px]">{secondDesc}</span>
            </div>

            <SecondIcon className={"size-4 lg:size-7"} />
          </div>
        </label>
      </div>

      <div className="pr-2 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-evenly flex-1">
        <label>
          <div className="flex items-center gap-x-1 text-neutral-700 text-xs sm:text-sm lg:text-base lg:font-medium lg:cursor-pointer">
            <input
              type="radio"
              checked={method === "secondary"}
              onChange={() => setMethod("secondary")}
              className="appearance-none w-3.5 h-3.5 rounded-full ring-1 ring-neutral-400 ring-offset-1 checked:bg-success duration-200 ml-2"
            />
            <div className="flex flex-col text-neutral-700">
              <span className="text-sm">{ThirdTitle}</span>
              <span className="hidden lg:block text-[10px]">{ThirdDesc}</span>
            </div>

            <ThirdIcon className={"size-4 lg:size-7"} />
          </div>
        </label>
      </div>
    </div>
  );
}

export default OptionSelector;

const EmptyAddress = () => {
  return (
    <div className="relative min-h-[calc(100vh_-_365px)] border border-neutral-400 rounded-lg  flex items-center justify-center md:min-h-[calc(100vh_-_442px)]">
      <div className="bg-emptyPage bg-cover bg-center w-52 h-48 flex items-center justify-center md:w-80 md:h-72">
        <p
          className={
            "text-xs absolute left-0 right-0 top-[48.75%] text-center font-medium text-neutral-700 px-1 sm:px-0 md:text-lg"
          }
        >
          شما هنوز هیچ آدرسی را اضافه نکرده‌اید!
        </p>
      </div>
    </div>
  );
};

export default EmptyAddress;

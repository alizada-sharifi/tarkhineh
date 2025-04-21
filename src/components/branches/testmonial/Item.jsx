function Item({ userImage, name, date, description }) {
  return (
    <div className="box w-full  border-gray-4 py-8 px-4 rounded-sm border flex flex-col gap-7 sm:flex-row items-center justify-center relative">
      <div className="info w-full md:w-1/3">
        <img src={userImage} className="rounded-full block size-14 mb-1" />
        <div>
          <p className="text-body-md font-body-md leading-6 text-gray-7 w-full">
            {name}
          </p>
          <p className="text-body-md font-body-md leading-6 text-gray-7 w-full">
            {date}
          </p>
        </div>
      </div>

      <span className="text-body-md font-body-md text-justify text-gray-8 w-full ">
        {description}
      </span>
    </div>
  );
}

export default Item;

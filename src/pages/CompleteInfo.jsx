import {
  ShoppingCart,
  Wallet,
  TickSquare,
  Truck,
  FastTruck,
  Bag,
  Location,
  Note,
} from "../components/icons";
import { useState } from "react";
import { Address, Factor } from "../components/completeInfo";
import MobileHeader from "../components/MobileHeader";
import OptionSelector from "../components/OptionSelector";

function CompleteInfo() {
  const [list, setList] = useState([]);
  const [shippingCost, setShippingCost] = useState(0);
  const [selectedMethod, setSelectedMethod] = useState("primary");

  const updateShippingCost = (newCost) => {
    setShippingCost(newCost);
  };

  return (
    <>
      <div className="container mx-auto mt-6 px-5 min-h-[calc(100vh_-_239px)] md:mt-10">
        {/* ============ mobile header ============= */}
        <MobileHeader
          title={"تکمیل اطلاعات"}
          className={"relative justify-center"}
          iconClassName={"absolute right-0"}
        />

        {/*  =================== desktop header ================ */}
        <div className=" items-center justify-center hidden md:flex mb-4">
          <div className="flex items-center gap-x-1 lg:gap-x-2 text-sm text-primary ">
            <ShoppingCart className={"fill-primary"} />
            <span>سبد خرید</span>
            <p className="!font-medium text-sm pt-1 text-primary">
              - - - - - - - -
            </p>
          </div>

          <div className="flex items-center gap-x-1 lg:gap-x-2 text-base text-primary font-bold">
            <p className="!font-medium text-sm pt-1">- - - - - - - -</p>
            <TickSquare className={"fill-primary"} />
            <span>تکمیل اطلاعات</span>
          </div>

          <div className="flex items-center gap-x-1 lg:gap-x-2 text-sm text-neutral-400">
            <p className="!font-medium text-sm pt-1">- - - - - - - -</p>
            <p className="!font-medium text-sm pt-1">- - - - - - - -</p>
            <Wallet />
            <span>پرداخت</span>
          </div>
        </div>

        <div className="container flex flex-col  lg:flex-row gap-6 mb-6">
          <div className="flex flex-col gap-y-4 lg:gap-y-6 flex-1">
            <OptionSelector
              FirstIcon={Truck}
              SecondIcon={FastTruck}
              ThirdIcon={Bag}
              Title={"روش تحویل سفارش"}
              secondTitle={"ارسال توسط پیک"}
              secondDesc={"توسط پیک رستوران ارسال شود."}
              ThirdTitle={"تحویل حضوری"}
              ThirdDesc={"توسط شخص برده شود"}
              method={selectedMethod}
              setMethod={setSelectedMethod}
            />

            <div className="rounded-lg p-4 relative border border-neutral-400">
              <div className="flex items-center gap-x-1 text-[15px] font-medium text-neutral-800 pb-3 mb-4 border-b border-neutral-400 lg:text-base">
                <Location />
                <span>آدرس ها</span>
              </div>

              <Address
                list={list}
                setList={setList}
                updateShippingCost={updateShippingCost}
              />
            </div>

            <div className="rounded-lg p-4 border border-neutral-400 flex ">
              <Note />
              <textarea
                typeof="text"
                placeholder="توضیحات سفارش اختیاری"
                className="resize-none scroll-smooth w-full h-[141px] outline-none placeholder:text-[15px] placeholder:text-neutral-700 lg:placeholder:text-base"
              />
            </div>
          </div>

          <div className="lg:w-1/3">
            <Factor shippingCost={shippingCost} list={list} />
          </div>
        </div>
      </div>
    </>
  );
}

export default CompleteInfo;

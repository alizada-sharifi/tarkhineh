import { Button } from "../components/buttons";
import { Link } from "react-router";
import ROUTES from "../router/routePath";
import {
  RightArrow,
  ShoppingCart,
  Wallet,
  TickSquare,
  Close,
  Truck,
  FastTruck,
  Bag,
  Location,
  Note,
} from "../components/icons";
import { useState } from "react";
import { Address, Factor } from "../components/completeInfo";

function CompleteInfo() {
  const [deliveryMethod, setDeliveryMethod] = useState("delivery");
  const [list, setList] = useState([]);
  const [shippingCost, setShippingCost] = useState(0);

  const updateShippingCost = (newCost) => {
    setShippingCost(newCost);
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
  
      <div className="container mx-auto mt-6 px-5 min-h-[calc(100vh_-_239px)] md:mt-10">
        {/* ============ mobile header ============= */}
        <div className="flex items-center justify-between md:hidden mb-4">
          <Link to={ROUTES.CART}>
            <RightArrow className={"fill-black size-5"} />
          </Link>

          <span className="font-bold text-base text-neutral-800">سبد خرید</span>
        </div>

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
            <div className="border border-neutral-400 rounded-lg p-3 lg:py-6 flex lg:items-center flex-col gap-y-3 lg:flex-row ">
              <div className="flex items-center gap-1 pb-3 border-b border-neutral-400 lg:border-none lg:pb-0 ">
                <Truck className={"size-5 lg:size-7 "} />
                <span className="text-sm text-neutral-800 lg:text-base font-medium ">
                  روش تحویل سفارش
                </span>
              </div>

              <div className="pr-2 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-evenly flex-1">
                <label>
                  <div className="flex items-center jus gap-x-1 text-neutral-700 text-xs sm:text-sm lg:text-base lg:font-medium lg:cursor-pointer">
                    <input
                      type="radio"
                      checked={deliveryMethod === "delivery"}
                      onChange={() => setDeliveryMethod("delivery")}
                      className="appearance-none w-3.5 h-3.5 rounded-full ring-1 ring-neutral-400 ring-offset-1 checked:bg-success duration-200 ml-2"
                    />
                    <div className="flex flex-col text-neutral-700">
                      <span className="text-sm ">ارسال توسط پیک</span>
                      <span className="hidden lg:block text-[10px]">
                        توسط پیک رستوران ارسال شود.
                      </span>
                    </div>

                    <FastTruck className={"size-4 lg:size-7"} />
                  </div>
                </label>
              </div>

              <div className="pr-2 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-evenly flex-1">
                <label>
                  <div className="flex items-center jus gap-x-1 text-neutral-700 text-xs sm:text-sm lg:text-base lg:font-medium lg:cursor-pointer">
                    <input
                      type="radio"
                      checked={deliveryMethod === "person"}
                      onChange={() => setDeliveryMethod("person")}
                      className="appearance-none w-3.5 h-3.5 rounded-full ring-1 ring-neutral-400 ring-offset-1 checked:bg-success duration-200 ml-2"
                    />
                    <div className="flex flex-col text-neutral-700">
                      <span className="text-sm ">تحویل حضوری</span>
                      <span className="hidden lg:block text-[10px]">
                        توسط پیک رستوران ارسال شود.
                      </span>
                    </div>

                    <Bag className={"size-4 lg:size-7"} />
                  </div>
                </label>
              </div>
            </div>

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

import { useDispatch, useSelector } from "react-redux";
import { convertToFa } from "../../helper/functions";
import { Trash, Close, Card2 } from "../icons";
import FactorItem from "../completeInfo/FactorItem";
import { Dialog, DialogTitle, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import { Button } from "../buttons";
import { clear } from "../../stores/cartSlice";
import ROUTES from "../../router/routePath";

function PaymentFactor({ method }) {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);

  let [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      {/* =================== dialog section =============== */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      >
        <DialogPanel className="w-96 bg-white rounded-xl shadow-lg">
          <DialogTitle className="text-lg font-medium flex items-center justify-center relative bg-neutral-300 rounded-t-xl py-5">
            <span className="font-medium text-sm text-neutral-800 md:text-lg">
              حذف محصولات
            </span>
            <button
              className="absolute left-6"
              onClick={() => setIsOpen(false)}
            >
              <Close className="fill-neutral-900" />
            </button>
          </DialogTitle>

          <div className="p-3 md:p-6 text-center">
            <p className="text-xs text-neutral-800 md:text-base">
              همه محصولات سبد خرید شما حذف شود؟
            </p>

            <div className="flex items-center justify-center gap-x-5 mt-6 text-xs sm:text-sm md:font-medium md:text-base ">
              <Button
                className="bg-transparent text-primary border border-primary"
                onClick={() => setIsOpen(false)}
              >
                بازگشت
              </Button>
              <Button
                onClick={() => {
                  dispatch(clear());
                  setIsOpen(false);
                }}
              >
                حذف
              </Button>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
      {/* ================================= */}
      <div
        className={
          cartState.itemsCounter > 0
            ? "border border-neutral-400 rounded-lg mb-10 p-6 text-neutral-800 flex flex-col"
            : ""
        }
      >
        <div className="hidden lg:flex items-center justify-between border-b border-neutral-400 pb-3 mb-3">
          <div className="flex items-center gap-x-1 text-neutral-800">
            <span>سبد خرید</span>
            <span className="text-sm">
              ({convertToFa(cartState.itemsCounter)})
            </span>
          </div>
          <button
            onClick={() => {
              if (cartState.itemsCounter > 0) openModal();
            }}
            className={
              cartState.itemsCounter > 0
                ? "text-neutral-800"
                : "text-neutral-400"
            }
          >
            <Trash className={"fill-neutral-800"} />
          </button>
        </div>
        <div
          className={
            cartState.itemsCounter > 0
              ? "hidden lg:block [&>*:nth-child(odd)]:bg-neutral-100 [&>*:nth-child(even)]:bg-neutral-300 h-48 overflow-scroll mb-3"
              : ""
          }
        >
          {cartState.selectedItems.map((item) => (
            <FactorItem key={item.id} props={{ data: item }} />
          ))}
        </div>

        {cartState.itemsCounter > 0 && (
          <div className="flex flex-col gap-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-400 text-xs sm:text-sm lg:py-3 lg:border-y">
              <span>تخفیف محصولات</span>
              <div className="flex items-center gap-x-1 text-neutral-700">
                <span>{convertToFa(cartState.discount)}</span>
                <span>تومان</span>
              </div>
            </div>

            {method === "primary" ? (
              <div className="border-b border-neutral-400 pb-3 flex  flex-col gap-y-2">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span>هزینه ارسال</span>
                  <div className="flex">
                    <span>{convertToFa(39000)}</span>
                    <span>تومان</span>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="flex items-center justify-between text-xs sm:text-sm md:text-lg md:my-2">
              <span>مبلغ قابل پرداخت</span>
              <div className="text-primary flex items-center gap-x-1 font-medium md:text-lg">
                {method === "primary" ? (
                  <span>{convertToFa(cartState.total + 39000)}</span>
                ) : (
                  <span>{convertToFa(cartState.total)}</span>
                )}
                <span>تومان</span>
              </div>
            </div>

            <Button
              className="flex gap-2 items-center justify-center"
              href={ROUTES.SUCCESSFULLPAYMENT}
            >
              <Card2 className={"fill-white"} />
              {method === "primary" ? (
                <span>تکمیل خرید</span>
              ) : (
                <span>تکمیل سفارش</span>
              )}
            </Button>
          </div>
        )}
      </div>
    </>
  );
}

export default PaymentFactor;

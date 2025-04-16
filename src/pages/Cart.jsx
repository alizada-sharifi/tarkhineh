import { Link } from "react-router-dom";
import {
  RightArrow,
  Trash,
  Close,
  ShoppingCart,
  TickSquare,
  Wallet,
  Warning,
  LeftArrow,
} from "../components/icons";
import { Dialog, DialogTitle, DialogPanel } from "@headlessui/react";
import { Button } from "../components/buttons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../stores/cartSlice";
import EmptyCart from "../components/cart/EmptyCart";
import { convertToFa } from "../helper/functions";
import CartItem from "../components/cart/CartItem";

function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  const { isLoggedIn } = useSelector((state) => state.auth);
  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      {/*  ======================== dialog ================= */}
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
      {/* ========================= */}

      <div className="container mx-auto mt-6 px-5 min-h-[calc(100vh_-_239px)] md:mt-10">
        {/* ============ mobile header ============= */}
        <div className="flex items-center justify-between md:hidden mb-4">
          <Link to="/">
            <RightArrow className={"fill-black size-5"} />
          </Link>

          <span className="font-bold text-base text-neutral-800">سبد خرید</span>

          <button
            onClick={() => {
              if (cartState.itemsCounter > 0) openModal();
            }}
            className={
              cartState.itemsCounter > 0 ? "text-[#353535]" : "text-[#CBCBCB]"
            }
          >
            <Trash className={"fill-neutral-400"} />
          </button>
        </div>
        {/*  =================== desktop header ================ */}
        <div className=" items-center justify-center hidden md:flex mb-4">
          <div className="flex items-center gap-x-1 lg:gap-x-2 text-lg font-bold text-primary ">
            <ShoppingCart className={"size-8 fill-primary"} />
            <span>سبد خرید</span>
            <p className="!font-medium text-sm pt-1">- - - - - - - -</p>
          </div>

          <div className="flex items-center gap-x-1 lg:gap-x-2 text-sm text-neutral-400">
            <p className="!font-medium text-sm pt-1">- - - - - - - -</p>
            <TickSquare />
            <span>تکمیل اطلاعات</span>
            <p className="!font-medium text-sm pt-1">- - - - - - - -</p>
          </div>

          <div className="flex items-center gap-x-1 lg:gap-x-2 text-sm text-neutral-400">
            <p className="!font-medium text-sm pt-1">- - - - - - - -</p>
            <Wallet />
            <span>پرداخت</span>
          </div>
        </div>

        {isLoggedIn ? (
          <>
            {cartState.itemsCounter === 0 ? (
              <EmptyCart />
            ) : (
              <div
                className={
                  cartState.itemsCounter > 0
                    ? "border border-neutral-400 rounded-lg mb-10 p-6 text-neutral-800 flex flex-col lg:flex-row lg:items-start lg:gap-x-6 md:p-0 md:border-none"
                    : ""
                }
              >
                <div
                  className={
                    cartState.itemsCounter > 0
                      ? "[&>*:nth-child(odd)]:bg-neutral-100 [&>*:nth-child(even)]:bg-neutral-300 h-[187px] overflow-auto mb-3 md:[&>*:nth-child(odd)]:bg-white md:[&>*:nth-child(even)]:bg-white md:border md:border-neutral-400 md:rounded-lg md:p-6 md:h-[400px] md:w-full lg:h-[565px]"
                      : ""
                  }
                >
                  {cartState.selectedItems.map((item) => (
                    <CartItem data={item} key={item.id} />
                  ))}
                </div>

                {cartState.itemsCounter > 0 && (
                  <div
                    className={
                      "flex flex-col gap-y-3 md:border md:border-neutral-400 md:rounded-lg md:p-6 xl:w-[650px]"
                    }
                  >
                    <div className="hidden md:flex items-center justify-between mb-3">
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
                      >
                        <Trash
                          className={
                            cartState.itemsCounter > 0
                              ? "fill-neutral-800"
                              : "fill-neutral-400"
                          }
                          onClick={() => setIsOpen(true)}
                        />
                      </button>
                    </div>
                    <div className="flex items-center justify-between py-3 border-y border-neutral-400 text-xs sm:text-sm">
                      <span>تخفیف محصولات</span>
                      <div className="flex items-center gap-x-1 text-neutral-700">
                        <span>{convertToFa(cartState.discount)}</span>
                        <span>تومان</span>
                      </div>
                    </div>
                    <div className="border-b border-neutral-400 pb-3">
                      <div className="flex items-center justify-between text-xs sm:text-sm mb-2">
                        <span>هزینه ارسال</span>
                        <div className="flex items-center gap-x-1 text-neutral-700">
                          <span>۰</span>
                          <span>تومان</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-x-2 text-[#A9791C] text-[10px] sm:text-[11px] md:text-xs">
                        <Warning />

                        <p className="text-justify leading-5 font-medium">
                          هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال
                          انتخابی شما محاسبه و به این مبلغ اضافه خواهد شد.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs sm:text-sm md:text-lg md:my-2">
                      <span>مبلغ قابل پرداخت</span>
                      <div className="text-primary flex items-center gap-x-1 font-medium md:text-lg">
                        <span>{convertToFa(cartState.total)}</span>
                        <span>تومان</span>
                      </div>
                    </div>

                    <Button className="flex items-center justify-center">
                      <span>تکمیل اطلاعات</span>
                      <LeftArrow className={"size-5"} />
                    </Button>
                  </div>
                )}
              </div>
            )}
          </>
        ) : (
          <EmptyCart />
        )}
      </div>
    </>
  );
}

export default Cart;

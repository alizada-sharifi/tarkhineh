import React, { useState } from "react";
import MobileHeader from "../components/MobileHeader";
import {
  Card,
  Card2,
  Discount,
  ShoppingCart,
  TickSquare,
  Wallet,
  WalletMoney,
  Warning,
} from "../components/icons";
import { Button } from "../components/buttons";
import OptionSelector from "../components/OptionSelector";
import mellat from "../assets/images/bankMellat.jpg";
import parsian from "../assets/images/bankParsian.jpg";
import saman from "../assets/images/bankSaman.jpg";
import { cn } from "../helper/common";
import { PaymentFactor } from "../components/payment";

function Payment() {
  const [discountCode, setDiscountCode] = useState("");
  const [paymentBank, setPaymentBank] = useState("parsian");
  const [selectedMethod, setSelectedMethod] = useState("primary");
  const [shippingCost, setShippingCost] = useState(0);
  const [list, setList] = useState([]);

  return (
    <>
      <div className="container mx-auto mt-6 px-5 min-h-[calc(100vh_-_239px)] md:mt-10">
        <MobileHeader
          title={"پرداخت"}
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

          <div className="flex items-center gap-x-1 lg:gap-x-2 text-sm text-primary">
            <p className="!font-medium text-sm pt-1">- - - - - - - -</p>
            <TickSquare className={"fill-primary"} />
            <span>تکمیل اطلاعات</span>
          </div>

          <div className="flex items-center gap-x-1 lg:gap-x-2 text-base text-primary font-bold">
            <p className="!font-medium text-sm pt-1">- - - - - - - -</p>
            <p className="!font-medium text-sm pt-1">- - - - - - - -</p>
            <Wallet className={"fill-primary"} />
            <span>پرداخت</span>
          </div>
        </div>

        <div className="container flex flex-col lg:flex-row gap-8 mb-6">
          <div className="flex flex-col gap-y-4 lg:gap-y-6 flex-1">
            <div className="border border-neutral-400 rounded-lg p-3 lg:py-6 flex lg:items-center flex-col gap-y-3 lg:flex-row lg:justify-between">
              <div className="flex items-center gap-1 pb-3 border-b border-neutral-400 lg:border-none lg:pb-0 ">
                <Discount className={"size-5 lg:size-7 "} />
                <span className="text-sm text-neutral-800 lg:text-base font-medium ">
                  ثبت کد تخفیف
                </span>
              </div>

              <div className="flex gap-3">
                <input
                  type="text"
                  className="border py-2 rounded-md px-2 w-4/5 lg:w-80 border-neutral-400 text-xs md:text-sm text-neutral-700 placeholder:text-neutral-700 outline-none"
                  placeholder="کد تخفیف"
                  onChange={(e) => setDiscountCode(e.target.value)}
                />
                <Button
                  className={
                    discountCode
                      ? ""
                      : "bg-neutral-400 hover:cursor-not-allowed"
                  }
                >
                  ثبت کد
                </Button>
              </div>
            </div>

            <OptionSelector
              FirstIcon={WalletMoney}
              SecondIcon={Card}
              ThirdIcon={Wallet}
              Title={"روش پرداخت"}
              secondTitle={"پرداخت اینترنتی"}
              secondDesc={"توسط پیک رستوران ارسال شود."}
              ThirdTitle={"پرداخت در محل"}
              ThirdDesc={"توسط شخص برده شود"}
              method={selectedMethod}
              setMethod={setSelectedMethod}
            />

            {selectedMethod === "primary" ? (
              <div className="border border-neutral-400 rounded-lg p-3 lg:py-6 lg:flex items-start lg:gap-x-14 xl:gap-x-24 ">
                <div className="flex items-center gap-1 pb-3 border-b border-neutral-400 lg:border-none lg:pb-0 mb-3 ">
                  <Card2 className={"size-5 lg:size-7 "} />
                  <span className="text-sm text-neutral-800 lg:text-base font-medium ">
                    درگاه پرداخت
                  </span>
                </div>

                <div className="space-y-3 text-center">
                  <div className="flex gap-2 lg:gap-4 items-center justify-center ">
                    <img
                      onClick={() => setPaymentBank("saman")}
                      src={saman}
                      alt="BankSaman"
                      className={cn(
                        "border border-neutral-400 rounded shadow-2 cursor-pointer size-16 lg:size-24",
                        paymentBank === "saman"
                          ? "border-primary shadow-primary-500 shadow-2"
                          : ""
                      )}
                    />
                    <img
                      onClick={() => setPaymentBank("mellat")}
                      src={mellat}
                      alt="BankMellat"
                      className={cn(
                        "border border-neutral-400 rounded shadow-2 cursor-pointer size-16 lg:size-24",
                        paymentBank === "mellat"
                          ? "border-primary shadow-primary-500 shadow-2"
                          : ""
                      )}
                    />
                    <img
                      onClick={() => setPaymentBank("parsian")}
                      src={parsian}
                      alt="BankParsian"
                      className={cn(
                        "border border-neutral-400 rounded shadow-2 cursor-pointer size-16 lg:size-24",
                        paymentBank === "parsian"
                          ? "border-primary shadow-primary-500 shadow-2"
                          : ""
                      )}
                    />
                  </div>
                  <div className="text-xs text-neutral-700 text-center lg:text-sm">
                    <p>
                      پرداخت از طریق کلیه کارت‌های عضو شتاب امکان‌پذیر است.‌
                    </p>
                    <p>(لطفا قبل از پرداخت فیلترشکن خود را خاموش کنید.)</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="border border-neutral-400 bg-neutral-100 rounded-lg p-3 lg:py-6 lg:flex items-center lg:gap-x-14 xl:gap-x-24">
                <div className="flex items-center gap-1 pb-3 border-b border-neutral-400 lg:border-none lg:pb-0 mb-3 ">
                  <Warning className={"size-5 lg:size-7 fill-neutral-800 "} />
                  <span className="text-sm text-neutral-800 lg:text-base font-medium ">
                    قابل توجه
                  </span>
                </div>

                <p
                  className="text-xs text-neutral-700 text-justify 
              lg:w-2/3 lg:text-sm"
                >
                  هزینه سفارش شما در حین تحویل کالا دریافت خواهد شد. لطفا قبل از
                  تحویل کالا کارت بانکی یا پول نقد همراه خود داشته باشید و از
                  درخواست برای پرداخت در زمان بعدی یا نسیه خودداری فرمایید. با
                  تشکر از همراهی شما.
                </p>
              </div>
            )}
          </div>

          <div className="lg:w-1/3">
            <PaymentFactor method={selectedMethod} list={list} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;

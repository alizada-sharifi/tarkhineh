import React from "react";
import { Success } from "../components/icons";
import { convertToFa } from "../helper/functions";
import { Button } from "../components/buttons";

function SuccessfulPayment() {
  return (
    <div className="container flex flex-col gap-3 md:gap-6 items-center justify-center bg-successfulPayment min-h-[calc(100vh_-_215px)] bg-cover bg-center">
      <Success className={"size-32 md:size-64"} />
      <h3 className="font-bold text-base text-primary md:text-4xl">
        پرداخت شما با موفقیت انجام شد!
      </h3>

      <p className="text-primary text-sm md:text-xl">
        کد رهگیری سفارش شما: {convertToFa(Math.floor(Math.random() * 200000))}
      </p>

      <Button
        className="bg-transparent border border-primary text-primary"
        href="/"
      >
        بازگشت به صفحه اصلی
      </Button>
    </div>
  );
}

export default SuccessfulPayment;

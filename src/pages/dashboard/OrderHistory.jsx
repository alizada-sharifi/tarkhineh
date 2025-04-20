import React from "react";
import MobileHeader from "../../components/MobileHeader";
import Sidbar from "../../components/Sidbar";
import { useSelector } from "react-redux";
import { Calander, Wallet } from "../../components/icons";
import { convertToFa, enToFa } from "../../helper/functions";
import EmptyCart from "../../components/cart/EmptyCart";
import moment from "moment-jalaali";

function OrderHistory() {
  const purchaseHistory = useSelector((state) => state.cart.purchaseHistory);

  return (
    <div className="container mx-auto mt-6 px-5 min-h-[calc(100vh_-_239px)] md:mt-10">
      <MobileHeader
        title={"سفارشات"}
        className={"relative justify-center "}
        iconClassName={"absolute right-0"}
      />

      <div className="flex gap-x-10">
        <Sidbar className={"hidden lg:block "} />
        <div className="lg:border border-neutral-400 p-4 flex-1 rounded-lg ">
          <h3 className="font-semibold mb-4 text-xl text-neutral-800 border-b-2 border-r-neutral-400 pb-3 hidden md:block">
            سفارشات
          </h3>

          {purchaseHistory && purchaseHistory.length > 0 ? (
            <ul>
              {purchaseHistory
                .slice()
                .reverse()
                .map((purchase, index) => (
                  <li
                    key={index}
                    className="p-3 pb-2 border rounded-md border-neutral-400 mb-3 md:p-6 md:pb-3.5 md:mb-4"
                  >
                    <div className="flex flex-col gap-y-2 mb-4">
                      <div className="flex items-center gap-x-1 text-xs text-neutral-700 md:text-sm">
                        <Calander />

                        <span>
                          تاریخ:
                          {moment(purchase.date).format(
                            " dddd jYYYY/jMM/jDD - ساعت: HH:mm "
                          )}
                        </span>
                      </div>

                      <div className="flex items-center gap-x-1 text-xs text-neutral-700 md:text-sm">
                        <Wallet />
                        <span>مجموع قیمت : {convertToFa(purchase.total)}</span>
                      </div>
                    </div>

                    <ul className="flex overflow-auto overflow-y-hidden gap-x-2 pb-1 md:pb-4 md:gap-x-3">
                      {purchase.items.map((item, index) => (
                        <li key={index}>
                          <div className="border rounded-lg border-neutral-400 overflow-hidden text-xs text-neutral-800 flex flex-col items-center justify-between gap-y-1 pb-2 md:text-sm">
                            <div className="relative">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-24 md:w-40 h-auto"
                              />
                              <span className="absolute left-1 bottom-1 bg-primary-100 text-primary px-1 rounded font-medium md:px-1.5">
                                {enToFa(item.quantity)}x
                              </span>
                            </div>
                            <p className="w-24 text-center font-medium md:w-40">
                              {item.title}
                            </p>
                            <p>{convertToFa(item.price)} تومان</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
            </ul>
          ) : (
            <div className="mt-3">
              <EmptyCart />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;

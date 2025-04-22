import React, { useEffect, useState } from "react";
import { Edit, Plus, TickSquare, Trash } from "../icons";
import SetAddress from "./SetAddress";
import { cn } from "../../helper/common";

const Address = ({ list, setList, updateShippingCost, className }) => {
  const [editedIndex, setEditedIndex] = useState(-1);
  const [isCreating, setIsCreating] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
    setIsCreating(false);
  };

  const handleAddAddress = () => {
    setIsOpen(true);
    setIsCreating(true);
  };

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("addressList")) || [];
    setList(storedList);

    if (storedList.length > 0) {
      const initialAddressId = storedList[0].id;
      setSelectedAddressId(initialAddressId);
    }

    if (storedList.length > 0) {
      updateShippingCost(39000);
    }
  }, []);

  const deleteItem = (key) => {
    const updatedList = list.filter((item) => item.id !== key);
    setList(updatedList);
    localStorage.setItem("addressList", JSON.stringify(updatedList));
  };

  const saveEditedItem = () => {
    setEditedIndex(-1);
    localStorage.setItem("addressList", JSON.stringify(list));
  };

  return (
    <>
      {isCreating ? (
        <SetAddress
          isOpen={isOpen}
          closeModal={closeModal}
          list={list}
          setList={setList}
        />
      ) : (
        <button
          onClick={handleAddAddress}
          className={cn(
            "absolute top-4 left-4 text-primary flex items-center text-xs sm:text-sm",
            className
          )}
        >
          <Plus />
          <span>افزودن آدرس</span>
        </button>
      )}

      {list.length === 0 && !isCreating && (
        <div className="flex items-center justify-center -m-1">
          <div className="bg-emptyPage bg-cover bg-center w-[131px] h-[147px] flex items-center justify-center">
            <p className="text-xs absolute left-0 right-0 top-[60%] text-center font-medium text-neutral-600 md:text-sm">
              شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!
            </p>
          </div>
        </div>
      )}

      <ul className="flex flex-col gap-y-2 lg:grid lg:grid-cols-2 lg:gap-4">
        {list.map((item, index) => (
          <li key={item.id} className="relative bg-neutral-100 lg:w-full">
            {editedIndex === index ? (
              <div className="border border-neutral-400 rounded p-4 relative lg:rounded-lg">
                <textarea
                  value={item.address}
                  onChange={(e) => {
                    const updatedList = [...list];
                    updatedList[index].address = e.target.value;
                    setList(updatedList);
                  }}
                  className="bg-neutral-100 w-full outline-none resize-none scroll-smooth placeholder:text-neutral-700 text-neutral-800 text-xs mb-1 pl-14 lg:text-base"
                  placeholder="آدرس"
                />

                <div className="flex items-center justify-center text-[13px] text-neutral-700 lg:text-sm">
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) => {
                      const updatedList = [...list];
                      updatedList[index].name = e.target.value;
                      setList(updatedList);
                    }}
                    className="w-1/2 outline-none bg-neutral-100"
                    placeholder="نام گیرنده"
                  />
                  <input
                    type="text"
                    value={item.phoneNumber}
                    onChange={(e) => {
                      const updatedList = [...list];
                      updatedList[index].phoneNumber = e.target.value;
                      setList(updatedList);
                    }}
                    className="w-1/2 outline-none text-left bg-[#F9F9F9]"
                    placeholder="شماره تلفن"
                  />
                </div>
              </div>
            ) : (
              <div
                className={`border ${
                  selectedAddressId === item.id
                    ? "border-[#417F56]"
                    : "border-[#CBCBCB]"
                }  rounded p-4 lg:rounded-lg`}
                onClick={() => setSelectedAddressId(item.id)}
              >
                <textarea
                  className="bg-neutral-100 w-full outline-none resize-none scroll-smooth placeholder:text-neutral-700 text-neutral-800 text-[13px] mb-1 pl-[52px] lg:text-base"
                  value={item.address}
                  readOnly
                />

                <div className="flex items-center justify-center text-xs text-neutral-700 lg:text-sm">
                  <span className="w-1/2">{item.name}</span>
                  <span className="w-1/2 text-left">{item.phoneNumber}</span>
                </div>
              </div>
            )}

            <div className="absolute top-4 left-4 text-[#353535]">
              {editedIndex === index ? (
                <button
                  onClick={saveEditedItem}
                  className="absolute -top-[1px] left-0"
                >
                  <TickSquare className={"fill-primary"} />
                </button>
              ) : (
                <div className="flex items-center gap-x-3">
                  <button onClick={() => setEditedIndex(index)}>
                    <Edit className="size-6" />
                  </button>
                  <button onClick={() => deleteItem(item.id)}>
                    <Trash className="fill-neutral-800 size-6" />
                  </button>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Address;

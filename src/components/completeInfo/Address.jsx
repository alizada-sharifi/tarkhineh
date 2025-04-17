import React, { useEffect, useState } from "react";

import { Add, Close2, Edit, Plus, Trash } from "../icons";

const Address = ({ list, setList, updateShippingCost }) => {
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [editedIndex, setEditedIndex] = useState(-1);
  const [isCreating, setIsCreating] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [initialAddressAdded, setInitialAddressAdded] = useState(false);

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("addressList")) || [];
    setList(storedList);

    if (storedList.length > 0) {
      const initialAddressId = storedList[0].id;
      setSelectedAddressId(initialAddressId);
    }

    list && updateShippingCost(39000);
  }, []);

  const updateAddress = (value) => {
    setAddress(value);
  };

  const updateName = (value) => {
    setName(value);
  };

  const updatePhoneNumber = (value) => {
    setPhoneNumber(value);
  };

  const addItem = () => {
    if (address !== "" && name !== "" && phoneNumber !== "") {
      const newItem = {
        id: Math.floor(Math.random() * 100),
        address: address,
        name: name,
        phoneNumber: phoneNumber,
      };

      const updatedList = [...list, newItem];

      if (!initialAddressAdded) {
        setSelectedAddressId(newItem.id);
        setInitialAddressAdded(true);
      }

      setList([...list, newItem]);
      setAddress("");
      setName("");
      setPhoneNumber("");
      setIsCreating(false);

      localStorage.setItem("addressList", JSON.stringify(updatedList));
    }
  };

  const deleteItem = (key) => {
    const updatedList = list.filter((item) => item.id !== key);
    setList(updatedList);

    localStorage.setItem("addressList", JSON.stringify(updatedList));
  };

  const saveEditedItem = (editedValue, index) => {
    const updatedItem = [...list];
    updatedItem[index].value = editedValue;
    setList(updatedItem);
    setEditedIndex(-1);

    localStorage.setItem("addressList", JSON.stringify(updatedItem));
  };

  return (
    <>
      {isCreating ? (
        <div className="border border-neutral-400 rounded p-4 relative lg:rounded-lg mb-2 bg-neutral-100 lg:-scroll-mb-6">
          <textarea
            autoFocus
            value={address}
            onChange={(e) => updateAddress(e.target.value)}
            placeholder="آدرس"
            multiple
            className="bg-neutral-100 w-full outline-none resize-none scroll-smooth placeholder:text-neutral-700 text-neutral-800 text-sm mb-1  lg:text-base !pl-16"
          />

          <div className="flex items-center justify-center text-xs text-neutral-700 lg:text-sm">
            <input
              type="text"
              value={name}
              onChange={(e) => updateName(e.target.value)}
              placeholder="نام گیرنده"
              className="w-1/2 outline-none bg-neutral-100"
            />

            <input
              type="number"
              value={phoneNumber}
              onChange={(e) => updatePhoneNumber(e.target.value)}
              placeholder="شماره تلفن"
              className="w-1/2 outline-none text-left placeholder:text-right bg-neutral-100 duration-300"
            />
          </div>

          <button
            onClick={addItem}
            className="absolute top-4 left-4 text-[#417F56] flex items-center"
          >
            <Add />
          </button>

          <button
            onClick={() => {
              setIsCreating(false);
              setAddress("");
              setName("");
              setPhoneNumber("");
            }}
            className="absolute top-4 left-11 lg:left-12"
          >
            <Close2 className={"size-20"} />
          </button>
        </div>
      ) : (
        <button
          onClick={() => setIsCreating(true)}
          className="absolute top-4 left-4 text-primary flex items-center text-xs sm:text-sm"
        >
          <Plus />
          <span>افزودن آدرس</span>
        </button>
      )}
      {list.length === 0 && !isCreating && (
        <div className="flex items-center justify-center -m-1">
          <div className="bg-emptyPage bg-cover bg-center w-[131px] h-[127px] flex items-center justify-center">
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
                  type="text"
                  value={item.address}
                  placeholder="آدرس"
                  multiple
                  onChange={(e) => {
                    const updatedItem = [...list];
                    updatedItem[index].address = e.target.value;
                    setList(updatedItem);
                  }}
                  className="bg-neutral-100 w-full outline-none resize-none scroll-smooth placeholder:text-neutral-700 text-neutral-800 text-xs mb-1 pl-14 lg:text-base"
                />
                <div className="flex items-center justify-center text-[13px] text-neutral-700 lg:text-sm">
                  <input
                    type="text"
                    value={item.name}
                    placeholder="نام گیرنده"
                    onChange={(e) => {
                      const updatedItem = [...list];
                      updatedItem[index].name = e.target.value;
                      setList(updatedItem);
                    }}
                    className="w-1/2 outline-none bg-neutral-100"
                  />
                  <input
                    type="number"
                    value={item.phoneNumber}
                    placeholder="شماره تلفن"
                    onChange={(e) => {
                      const updatedItem = [...list];
                      updatedItem[index].phoneNumber = e.target.value;
                      setList(updatedItem);
                    }}
                    className="w-1/2 outline-none text-left placeholder:text-right bg-[#F9F9F9] duration-300"
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
                onClick={() => {
                  setSelectedAddressId(item.id);
                }}
              >
                <textarea
                  className="bg-neutral-100 w-full outline-none resize-none scroll-smooth placeholder:text-neutral-700 text-neutral-800 text-[13px] mb-1 pl-[52px] lg:text-base"
                  value={item.address}
                  multiple
                  readOnly
                />

                <div className="flex items-center justify-center text-xs text-neutral-700 lg:text-sm">
                  <span className="w-1/2">{item.name}</span>
                  <span className="w-1/2 text-left"> {item.phoneNumber}</span>
                </div>
              </div>
            )}
            <div className="absolute top-4 left-4 text-[#353535]">
              {editedIndex === index ? (
                <button
                  onClick={() => saveEditedItem(item.value, index)}
                  className="absolute -top-[1px] left-0"
                >
                  <Edit />
                </button>
              ) : (
                <div className="flex items-center gap-x-3">
                  <button onClick={() => setEditedIndex(index)}>
                    <Edit className={"size-6"} />
                  </button>
                  <button onClick={() => deleteItem(item.id)}>
                    <Trash className={"fill-neutral-800 size-6"} />
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

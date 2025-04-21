import EmptyAddress from "../../components/address/EmptyAddress";
import { Add, Close, Plus } from "../../components/icons";
import { DashboardLayout } from "../../layouts";
import { useState } from "react";

function Address() {
  const [isCreating, setIsCreating] = useState(false);
  const [list, setList] = useState([]);
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const updateAddress = (value) => {
    setAddress(value);
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

      setList(updatedList);
      setAddress("");
      setName("");
      setPhoneNumber("");
      setIsCreating(false);

      localStorage.setItem("addressList", JSON.stringify(updatedList));
    }
  };

  return (
    <DashboardLayout
      title={"آدرس‌ها"}
      header={
        <button
          onClick={() => setIsCreating(true)}
          className={
            !isCreating
              ? `absolute  text-[#417F56] flex items-center !top-0.5 !left-0 font-normal text-xs md:text-sm`
              : "hidden"
          }
        >
          <Plus />
          <span className="sm:hidden">افزودن</span>
          <span className="hidden sm:block">افزودن آدرس</span>
        </button>
      }
    >
      {!list.length && !isCreating && (
        <div className="mt-5">
          <EmptyAddress />
        </div>
      )}

      {isCreating && (
        <div
          className={
            "border border-neutral-400 p-4 relative lg:rounded-lg rounded-md mb-3 lg:mb-4 mt-5"
          }
        >
          <textarea
            autoFocus
            value={address}
            onChange={(e) => updateAddress(e.target.value)}
            placeholder="آدرس"
            multiple
            className={` w-full outline-none resize-none scroll-smooth placeholder:text-neutral-700 text-neutral-800 text-sm mb-1  lg:text-base bg-white pl-16`}
          />

          <div className="flex items-center justify-center text-xs text-neutral-700 lg:text-sm">
            <input
              type="text"
              value={name}
              onChange={(e) => updateName(e.target.value)}
              placeholder="نام گیرنده"
              className={"w-1/2 outline-none bg-white`"}
            />

            <input
              type="number"
              value={phoneNumber}
              onChange={(e) => updatePhoneNumber(e.target.value)}
              placeholder="شماره تلفن"
              className={
                "w-1/2 outline-none text-left placeholder:text-right  duration-300 bg-white"
              }
            />
          </div>

          <button onClick={addItem} className="absolute top-4 left-4 ">
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
            <Close />
          </button>
        </div>
      )}

      <ul className={`${ulStyle} !gap-y-3 my-5 md:my-5`}>
        {list.map((item, index) => (
          <li key={item.id} className={liStyle}>
            {editedIndex === index ? (
              <div className={`${addressBoxStyle} !rounded-md bg-white`}>
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
                  className={`${addressTextareaStyle} bg-white`}
                />
                <div className={userInfoDivStyle}>
                  <input
                    type="text"
                    value={item.name}
                    placeholder="نام گیرنده"
                    onChange={(e) => {
                      const updatedItem = [...list];
                      updatedItem[index].name = e.target.value;
                      setList(updatedItem);
                    }}
                    className={`${inputNameStyle} bg-white`}
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
                    className={`${inputPhoneNumberStyle} bg-white`}
                  />
                </div>
              </div>
            ) : (
              <div
                className={`border ${
                  selectedAddressId === item.id
                    ? "border-[#417F56]"
                    : "border-[#CBCBCB]"
                }  rounded-md p-4`}
                onClick={() => {
                  setSelectedAddressId(item.id);
                }}
              >
                <textarea
                  className={addressTextareaStyle}
                  value={item.address}
                  multiple
                  readOnly
                />

                <div className={userInfoDivStyle}>
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
                  <span className="lg:hidden">{editIcon}</span>
                  <span className="hidden lg:block">{editDesktopIcon}</span>
                </button>
              ) : (
                <div className="flex items-center gap-x-3">
                  <button onClick={() => setEditedIndex(index)}>
                    <span className="lg:hidden">{editIcon}</span>
                    <span className="hidden lg:block">{editDesktopIcon}</span>
                  </button>
                  <button onClick={() => deleteItem(item.id)}>
                    <span className="lg:hidden">{trashIcon}</span>
                    <span className="hidden lg:block">{trashDesktopIcon}</span>
                  </button>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </DashboardLayout>
  );
}

export default Address;

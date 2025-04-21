import { Dialog, DialogTitle, DialogPanel } from "@headlessui/react";
import useForm, { FormProvider } from "../../hooks/UseForm";
import { addressSchema } from "../../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Close } from "../icons";
import { Input, Textarea } from "../form";
import { Button } from "../buttons";

function EditAddress({ isOpen, closeModal }) {
  const methods = useForm({
    resolver: zodResolver(addressSchema),
  });

  const handleChecked = (e) => {
    const checked = e.target.checked;
    setIsChecked(checked);

    if (checked) {
      const fullName = `${localStorage.getItem("name") || ""} ${
        localStorage.getItem("familyName") || ""
      }`.trim();
      const phone = localStorage.getItem("phoneNumber") || "";

      setValue("fullName", fullName);
      setValue("phoneNumber", phone);
    } else {
      setValue("fullName", "");
      setValue("phoneNumber", "");
    }
  };

  const { handleSubmit, reset, setValue } = methods;

  const [isChecked, setIsChecked] = useState(false);

  const onSubmit = (data) => {
    const fullName =
      data.fullName ||
      `${localStorage.getItem("name") || ""} ${
        localStorage.getItem("familyName") || ""
      }`.trim();
    const phone = data.phoneNumber || localStorage.getItem("phoneNumber") || "";

    const newItem = {
      id: Math.floor(Math.random() * 10000),
      title: data.title,
      name: fullName,
      phoneNumber: phone,
      address: data.address,
    };

    const updatedList = [...list, newItem];
    setList(updatedList);

    if (!initialAddressAdded) {
      setSelectedAddressId(newItem.id);
      setInitialAddressAdded(true);
    }

    localStorage.setItem("addressList", JSON.stringify(updatedList));
    reset();
    closeModal();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={closeModal}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <DialogPanel className="w-80 sm:w-96 md:w-[600px] lg:w-[700px] bg-white rounded-xl shadow-lg">
        <DialogTitle className="text-lg font-medium flex items-center justify-center relative rounded-t-xl py-5 bg-neutral-300">
          <p className="text-base md:text-lg text-neutral-800 font-semibold">
            ثبت آدرس
          </p>
          <button className="absolute left-6" onClick={closeModal}>
            <Close className="fill-neutral-900" />
          </button>
        </DialogTitle>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="px-4 space-y-5 py-4">
              <Input placeholder="عنوان آدرس" name="title" />

              <div className="flex items-center gap-x-1 md:gap-x-2 text-sm text-neutral-700 md:text-base mb-2">
                <input
                  id="person"
                  type="checkbox"
                  onChange={handleChecked}
                  className="w-3 h-3 md:w-4 md:h-4 rounded-sm md:rounded text-primary bg-white border-primary accent-primary"
                />
                <label htmlFor="person" className="cursor-pointer">
                  تحویل گیرنده خودم هستم
                </label>
              </div>

              {!isChecked && (
                <>
                  <Input
                    placeholder="نام و نام‌خانوادگی تحویل گیرنده"
                    name="fullName"
                  />
                  <Input
                    placeholder="شماره همراه تحویل گیرنده"
                    name="phoneNumber"
                  />
                </>
              )}

              <Textarea
                placeholder="آدرس دقیق شما"
                name="address"
                className="h-40"
              />

              <div className="text-center">
                <Button type="submit" className="md:px-20">
                  ثبت آدرس
                </Button>
              </div>
            </div>
          </form>
        </FormProvider>
      </DialogPanel>
    </Dialog>
  );
}

export default EditAddress;

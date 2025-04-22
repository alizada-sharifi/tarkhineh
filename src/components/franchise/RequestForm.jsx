import Title from "../Title";
import useForm, { FormProvider } from "../../hooks/UseForm";
import { requestFormSchema } from "../../schemas";
import { Input, Textarea } from "../form";
import provinces from "../../data/province";
import { useRef, useState } from "react";
import { FolderAdd } from "../icons";
import { Button } from "../buttons";
import { ShowToast } from "../../helper";

function RequestForm() {
  const { handleSubmit, reset, ...methods } = useForm(requestFormSchema);
  const onSubmit = (data) => {
    console.log(data);
    ShowToast("اطلاعات شما با موفقیت ثبت شد");
    reset();
  };

  const licenseData = [
    {
      text: "پروانه کسب دارد.",
      value: "businessLicense",
    },
    {
      text: "آشپزخانه دارد.",
      value: "kitchen",
    },
    {
      text: "پارکینگ دارد.",
      value: "parking",
    },
    {
      text: "انبار دارد.",
      value: "Store",
    },
  ];

  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="py-6 border mt-6 border-neutral-400 rounded-lg p-4">
      <Title text={"فرم درخواست نمایندگی"} />

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" mt-4 mb-8">
            <Title
              text={"مشخصات فردی متقاضی"}
              className={"font-normal text-start text-sm md:text-lg"}
            />

            <div className="grid md:grid-cols-3 gap-6 my-4">
              <Input name="fullName" placeholder="نام و نام خانوادگی" />
              <Input name="nationalCode" placeholder="کد ملی" type="tel" />
              <Input name="phoneNumber" placeholder="شماره تماس" />
            </div>
          </div>

          <div className="mb-12">
            <Title
              text={"آدرس ملک متقاضی"}
              className={"font-normal text-start text-sm md:text-lg"}
            />

            <div className="grid md:grid-cols-3 gap-6 my-4">
              <select className="block w-full text-sm text-neutral-700   placeholder:text-neutral-700 outline-none border border-neutral-400 p-2 rounded-md focus:border-primary-60">
                {provinces.map((province, index) => (
                  <option key={index} value={province}>
                    {province}
                  </option>
                ))}
              </select>
              <Input placeholder="شهر" name="city" />
              <Input placeholder="منطقه" name="area" />
              <Textarea placeholder="آدرس دقیق" name="address" />
            </div>
          </div>

          <div className="mb-12">
            <Title
              text={"مشخصات ملک متقاضی"}
              className={"font-normal text-start text-sm md:text-lg"}
            />

            <div className="grid gap-6 md:grid-cols-3 my-4">
              <Input placeholder="نوع مالکیت" name="typeOfOwnership" />
              <Input
                placeholder="مساحت ملک (متر مربع)"
                name="space"
                type="number"
              />
              <Input placeholder="سن بنا" name="age" type="number" />
            </div>
          </div>

          <div>
            <Title
              text={"امکانات ملک متقاضی"}
              className={"font-normal text-start text-sm md:text-lg"}
            />
            <div className="grid md:grid-cols-2 gap-8 mt-4 justify-between">
              <div>
                <h3 className="text-sm md:text-base text-neutral-700">
                  ملک متقاضی:
                </h3>

                <div className="grid grid-cols-2 mt-3">
                  {licenseData.map((item, index) => (
                    <div
                      className="flex items-center gap-x-1 md:gap-x-2 text-sm text-neutral-700 md:text-base mb-2"
                      key={index}
                    >
                      <input
                        id={item.value}
                        type="checkbox"
                        className="w-3 h-3 md:w-4 md:h-4 rounded-sm md:rounded text-primary bg-white border-primary accent-primary"
                      />
                      <label for={item.value} className="cursor-pointer">
                        {item.text}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm md:text-base text-neutral-700 mb-3">
                  تصاویر ملک
                </h3>

                <div
                  className="border rounded-md  text-center cursor-pointer hover:border-gray-400 transition w-full min-h-[200px] flex items-center justify-center"
                  onClick={handleClick}
                >
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    className="hidden w-full"
                    onChange={handleFileChange}
                  />

                  {!preview ? (
                    <div className="flex flex-col items-center justify-center gap-2 text-gray-500">
                      <FolderAdd />
                      <span className="text-sm">
                        تصاویری از ملک را بارگذاری کنید...
                      </span>
                    </div>
                  ) : (
                    <img
                      src={preview}
                      alt="preview"
                      className="max-h-48 w-full object-contain rounded"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <Button type="submit">ثبت اطلاعات</Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default RequestForm;

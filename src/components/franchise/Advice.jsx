import React from "react";
import Title from "../Title";
import useForm, { FormProvider } from "../../hooks/UseForm";
import { adviceSchema } from "../../schemas";
import { Input } from "../form";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Button } from "../buttons";
import { ShowToast } from "../../helper";

function Advice() {
  const { handleSubmit, reset, ...methods } = useForm(adviceSchema);
  const onSubmit = (data) => {
    console.log("data", data);
    ShowToast("درخواست شما با موفقیت ثبت شد", "success");
    reset();
  };

  return (
    <div className="py-6 border-b border-neutral-400">
      <Title text={"دریافت مشاوره"} className={"mb-6"} />

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-x-8 gap-y-4  md:grid-cols-3">
            <Input placeholder="نام و نام خانوادگی" name="fullName" />
            <Input placeholder="شماره تماس" name="phoneNumber" />
            <DatePicker
              inputClass="datePickerInput"
              calendar={persian}
              locale={persian_fa}
              calendarPosition="bottom-right"
              placeholder="زمان ایده‌آل"
              arrowStyle={{
                display: "none",
              }}
              containerStyle={{
                width: "100%",
              }}
            />
          </div>

          <div className="text-center pt-6">
            <Button type="submit">درخواست مشاوره</Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default Advice;

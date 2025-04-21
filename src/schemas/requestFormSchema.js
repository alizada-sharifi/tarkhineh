import { z } from "zod";

const requestFormSchema = z.object({
  fullName: z.string().nonempty("نام و نام خانوادگی الزامی هست"),
  nationalCode: z
    .string()
    .nonempty("کد ملی الزامی هست")
    .regex(/^[0-9]{10}$/, { message: "کد ملی وارد شده معتبر نیست" }),
  phoneNumber: z
    .string()
    .regex(/^\d{10}$/, { message: "شماره موبایل باید 10 رقم باشد." }),
  city: z.string().nonempty("شهر خود را وارد کنید"),
  address: z.string().nonempty("لطفا آدرس خود را وارد کنید"),
  area: z.string().nonempty("لطفا منطقه خود را مشخص کنید"),
  typeOfOwnership: z.string().nonempty("نوع مالیکت را مشخص کنید"),
  space: z.string().nonempty("مقدار مساحت ملک را مشخص سازید"),
  age: z.string().nonempty("سن بنا را وارد کنید"),
});

export default requestFormSchema;

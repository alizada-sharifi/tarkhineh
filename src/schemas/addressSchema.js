import { z } from "zod";

const addressSchema = z.object({
  title: z.string().nonempty("عنوان آدرس الزامی هست"),
  fullName: z.string().nonempty("نام و نام خانوادگی تحویل گیرنده الزامی هست"),
  phoneNumber: z
    .string()
    .nonempty("شماره موبایل تحویل گیرنده الزامی هست")
    .regex(/^\d{10}$/, {
      message: "شماره موبایل تحویل گیرنده باید 10 رقم باشد.",
    }),
  address: z.string().nonempty("آدرس دقیق تحویل گیرنده الزامی هست"),
});

export default addressSchema;

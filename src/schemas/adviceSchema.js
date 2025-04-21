import { z } from "zod";

const adviceSchema = z.object({
  fullName: z.string().nonempty("نام و نام خانوادگی الزامی است"),
  phoneNumber: z
    .string()
    .regex(/^\d{10}$/, { message: "شماره موبایل باید 10 رقم باشد." }),
});

export default adviceSchema;

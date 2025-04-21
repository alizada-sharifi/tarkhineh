import { z } from "zod";

const loginSchema = z.object({
  name: z.string().nonempty("نام الزامی است"),
  familyName: z.string().nonempty("نام خانوادگی الزامی است"),
  phoneNumber: z
    .string()
    .regex(/^\d{10}$/, { message: "شماره موبایل باید 10 رقم باشد." }),
});
export default loginSchema;

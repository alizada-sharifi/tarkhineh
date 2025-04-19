import { z } from "zod";

const profileSchema = z.object({
  name: z.string().nonempty("نام الزامی است"),
  familyName: z.string().nonempty("نام خانوادگی الزامی است"),
  email: z.string().email("ایمیل معتبر نیست"),
  phoneNumber: z
    .string()
    .regex(/^\d{10}$/, { message: "شماره موبایل باید 10 رقم باشد." }),
  userName: z.string().optional(),
});
export default profileSchema;

import { z } from "zod";

const messageSchema = z.object({
  name: z.string().trim().nonempty("نام و نام خانوادگی الزامی هست"),
  email: z
    .string()
    .trim()
    .email("ایمیل معتبر نیست")
    .nullable()
    .optional()
    .transform((value) => (value === "" ? undefined : value)),
  phone: z.string().trim().nonempty("شماره تماس الزامی هست"),
  message: z
    .string()
    .trim()
    .nonempty("پیام الزامی هست")
    .max(200, { message: "حداکثر ۲۰۰ کاراکتر باشد" }),
});

export default messageSchema;

import { z } from "zod";

const loginSchema = z.object({
  name: z.string().nonempty("نام الزامی است"),
  familyName: z.string().nonempty("نام خانوادگی الزامی است"),
  email: z.string().email("ایمیل معتبر نیست"),
});
export default loginSchema;

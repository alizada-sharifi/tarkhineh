import { z } from "zod";

const loginSchema = z.object({
  name: z.string().nonempty("نام و نام خانوادگی الزامی هست"),
  email: z.string().email("ایمیل معتبر نیست"),
});
export default loginSchema;

import useForm, { FormProvider } from "../../../hooks/UseForm";
import { messageSchema } from "../../../schemas";
import { Input, Textarea } from "../../form";
function MessageForm() {
  const { handleSubmit, ...methods } = useForm(messageSchema);

  function onSubmit(data) {
    console.log("data", data);
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid gap-6 sm:grid-cols-12">
          <div className="col-span-6 space-y-3">
            <Input
              name="name"
              placeholder="نام و نام خانوادگی"
              className="text-white bg-transparent placeholder:text-white/80 focus:border-white"
            />
            <Input
              name="phone"
              placeholder="شماره تماس"
              className="text-white bg-transparent placeholder:text-white/80 focus:border-white "
            />
            <Input
              name="email"
              placeholder="آدرس ایمیل (اختیاری)"
              className="text-white bg-transparent placeholder:text-white/80 focus:border-white "
            />
          </div>
          <div className="col-span-6">
            <Textarea
              name="message"
              placeholder="پیام شما"
              className="h-full text-white bg-transparent placeholder:text-white/80 focus:border-white "
            />
          </div>
        </div>
        <div className="flex items-end ">
          <button className="px-4 py-2 mr-auto text-sm text-white bg-transparent border rounded-md hover:bg-white hover:text-black disabled:bg-neutral-300 disabled:text-neutral-400 disabled:cursor-not-allowed">
            {"ارسال پیام"}
          </button>
        </div>
      </form>
    </FormProvider>
  );
}

export default MessageForm;

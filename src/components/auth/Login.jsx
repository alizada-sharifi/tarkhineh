import { Dialog, DialogTitle, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import { Button } from "../buttons";
import { Close, Logo, User } from "../icons";
import useForm, { FormProvider } from "../../hooks/UseForm";
import { loginSchema } from "../../schemas";
import { Input } from "../form";
import { useDispatch } from "react-redux";
import { setLoginStatus } from "../../stores/authSlice";
import { ShowToast } from "../../helper";

function Login() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { handleSubmit, reset, ...methods } = useForm(loginSchema);

  const onSubmit = (data) => {
    console.log("data", data);
    localStorage.setItem("email", data.email);
    localStorage.setItem("name", data.name);
    dispatch(setLoginStatus(true));

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsOpen(false);

      setTimeout(() => {
        ShowToast("خوش آمدید", "success");
      }, 100);

      reset();
    }, 1000);
  };

  return (
    <>
      <User
        onClick={() => setIsOpen(true)}
        className="size-10 cursor-pointer"
      />

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      >
        <DialogPanel className="w-96 bg-white rounded-xl shadow-lg">
          <DialogTitle className="text-lg font-medium flex items-center justify-center relative rounded-t-xl py-5">
            <Logo className="w-32 h-10" />
            <button
              className="absolute left-6"
              onClick={() => setIsOpen(false)}
            >
              <Close className="fill-neutral-900" />
            </button>
          </DialogTitle>

          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="px-4 space-y-5 py-4">
                <Input name="name" placeholder="نام و نام خانوادگی" />
                <Input name="email" placeholder="ایمیل آدرس" />

                <Button className="w-full" type="submit">
                  {isLoading ? (
                    <div className="flex items-center gap-1 justify-center py-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" />
                    </div>
                  ) : (
                    "ورود"
                  )}
                </Button>
              </div>
            </form>
          </FormProvider>
        </DialogPanel>
      </Dialog>
    </>
  );
}

export default Login;

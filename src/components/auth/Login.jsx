import { Dialog, DialogTitle, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import { Button } from "../buttons";
import { Close, Logo } from "../icons";
import useForm, { FormProvider } from "../../hooks/UseForm";
import { loginSchema } from "../../schemas";
import { Input } from "../form";
import { useDispatch } from "react-redux";
import { setLoginStatus } from "../../stores/authSlice";
import { ShowToast } from "../../helper";
import { Link } from "react-router";
import ROUTES from "../../router/routePath";

function Login({ isOpen, closeModal }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { handleSubmit, reset, ...methods } = useForm(loginSchema);

  const onSubmit = (data) => {
    console.log("data", data);
    localStorage.setItem("phoneNumber", data.phoneNumber);
    localStorage.setItem("name", data.name);
    localStorage.setItem("familyName", data.familyName);
    dispatch(setLoginStatus(true));

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      closeModal();

      setTimeout(() => {
        ShowToast("خوش آمدید", "success");
      }, 100);

      reset();
    }, 1000);
  };

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={closeModal}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      >
        <DialogPanel className="w-96 bg-white rounded-xl shadow-lg">
          <DialogTitle className="text-lg font-medium flex items-center justify-center relative rounded-t-xl py-5">
            <Logo className="w-32 h-10" />
            <button className="absolute left-6" onClick={closeModal}>
              <Close className="fill-neutral-900" />
            </button>
          </DialogTitle>
          <p className="text-center mb-4 md:text-lg md:mb-5">ورود/ثبت نام</p>

          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="px-4 space-y-5 py-4">
                <Input name="name" placeholder="نام" />
                <Input name="familyName" placeholder="نام خانوادگی" />
                <Input
                  name="phoneNumber"
                  placeholder="شماره همراه"
                  type="tel"
                  dir="rtl"
                />

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

          <span className="text-xs mb-6 text-neutral-800 md:text-xs md:mb-7 text-center block ">
            ورود و عضویت در ترخینه به منزله قبول
            <Link
              to={ROUTES.RULES}
              className="text-primary pl-1"
              onClick={() => setIsOpen(false)}
            >
              قوانین و مقررات
            </Link>
            است
          </span>
        </DialogPanel>
      </Dialog>
    </>
  );
}

export default Login;

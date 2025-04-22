import { Dialog, DialogTitle, DialogPanel } from "@headlessui/react";
import { Close } from "./icons";
import { useNavigate } from "react-router";
import { Button } from "./buttons";
import { useDispatch } from "react-redux";
import { setLoginStatus } from "../stores/authSlice";

function LogOut({ isOpen, closeModal }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(setLoginStatus(false));
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };
  return (
    <Dialog
      open={isOpen}
      onClose={closeModal}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <DialogPanel className="w-96 bg-white rounded-xl shadow-lg">
        <DialogTitle className="text-lg bg-neutral-100 font-medium flex items-center justify-center relative rounded-t-xl py-5 ">
          <span>خروج</span>
          <button className="absolute left-6" onClick={closeModal}>
            <Close className="fill-neutral-900" />
          </button>
        </DialogTitle>
        <p className="text-center my-6 text-neutral-800 text-sm md:text-base">
          آیا مایل به خروج از حساب کاربری تان هستید؟
        </p>

        <div className="flex justify-center pb-8 gap-x-5">
          <Button className="!px-10" onClick={closeModal}>
            بازگشت
          </Button>
          <Button
            className="!px-10 bg-error-extralight text-error"
            onClick={handleLogOut}
          >
            خروج
          </Button>
        </div>
      </DialogPanel>
    </Dialog>
  );
}

export default LogOut;

import { NavLink } from "react-router";
import profileImage from "../assets/images/profile.png";
import { EmptyHeart, Location, SignOut, User, Wallet } from "./icons";
import LogOut from "./LogOut";
import { useState } from "react";
import ROUTES from "../router/routePath";
import { cn } from "../helper/common";

function Sidbar({ className }) {
  const data = [
    {
      Icon: User,
      title: "پروفایل",
      href: ROUTES.PROFILE,
    },
    {
      Icon: Wallet,
      title: "تاریخچه سفارشات",
      href: ROUTES.ORDERHISTORY,
    },
    {
      Icon: EmptyHeart,
      title: "علاقمندی ها",
      href: ROUTES.FAVORITES,
    },
    {
      Icon: Location,
      title: "آدرس های من",
      href: ROUTES.ADDRESS,
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div
      className={cn(
        "md:rounded-lg md:border md:border-neutral-400 p-2",
        className
      )}
    >
      <div className="flex items-center gap-3 border-b border-neutral-600 pb-2">
        <img
          src={profileImage}
          alt="profile Image"
          className="w-12 rounded-full border border-neutral-400 lg:w-16"
        />
        <div className="space-y-1">
          <p className="text-neutral-800 text-sm">
            <span>{localStorage.getItem("name")} </span>
            <span>{localStorage.getItem("familyName")}</span>
          </p>
          <p className="text-neutral-700 text-xs md:text-sm text-right">
            {localStorage.getItem("phoneNumber")}
          </p>
        </div>
      </div>

      <div className="flex flex-col py-3 gap-y-3 ">
        {data.map((item, index) => {
          return (
            <NavLink
              className={({ isActive }) =>
                cn("flex items-center gap-1 text-neutral-600", {
                  "text-primary font-semibold fill-primary": isActive,
                })
              }
              to={item.href}
              key={index}
            >
              <item.Icon className={"size-5 fill-neutral-600"} />
              <span>{item.title}</span>
            </NavLink>
          );
        })}
        <button
          className="flex items-center gap-1 text-error"
          onClick={openModal}
        >
          <SignOut className={"size-5"} />
          <span>خروج</span>
        </button>
        <LogOut closeModal={closeModal} isOpen={isOpen} />
      </div>
    </div>
  );
}

export default Sidbar;

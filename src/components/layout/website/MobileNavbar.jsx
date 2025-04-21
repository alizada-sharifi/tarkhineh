import { useState } from "react";
import { Close, Logo, Menu } from "../../icons";
import { cn } from "../../../helper/common";
import bg from "./../../../assets/images/mobile_navbar_layer.png";
import { NavLink } from "react-router";

import ROUTES from "../../../router/routePath";

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navlinkList = [
    {
      href: ROUTES.HOME,
      text: "صفحه اصلی",
    },
    {
      href: ROUTES.BRANCH,
      text: "شعبات",
    },
    {
      href: ROUTES.MENU,
      text: "منو",
    },
    {
      href: ROUTES.FRANCHIESE,
      text: "اعطای نمایندگی",
    },
    {
      href: ROUTES.ABOUT,
      text: "درباره ما",
    },
    {
      href: ROUTES.CONTACT,
      text: "تماس با ما",
    },
  ];
  return (
    <>
      <button className="block lg:hidden" onClick={() => setIsOpen(true)}>
        <Menu className="fill-primary" />
      </button>
      <div
        className={cn(
          "fixed inset-0 hidden bg-gray-900/20 transition-opacity duration-300 ease-linear opacity-0 z-50 ",
          {
            "!block opacity-1": isOpen,
          }
        )}
      >
        <div
          className={cn(
            "relative h-full bg-white flex flex-col w-full max-w-xs flex-1 transform transition duration-300 ease-in-out translate-x-full",
            {
              "translate-x-0": isOpen,
            }
          )}
        >
          <div className="relative">
            <img
              src={bg}
              alt=""
              className="object-contain object-top w-full "
            />
            <div className="absolute top-0 flex items-center justify-between w-full h-full p-4">
              <Logo className=" fill-white" />
              <Close
                className="self-start fill-white"
                onClick={() => setIsOpen(false)}
              />
            </div>
          </div>
          <nav className="flex flex-col [&>*]:py-2 p-4 divide-y ">
            {navlinkList.map((item, index) => (
              <NavLink
                key={index}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  cn("text-sm !pt-0", {
                    "text-primary": isActive,
                  })
                }
              >
                {item.text}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}

export default MobileNavbar;

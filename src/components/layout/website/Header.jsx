import { NavLink, useNavigate } from "react-router";
import { Logo, Search, ShoppingCart, User } from "../../icons";
import ROUTES from "../../../router/routePath";
import { cn } from "../../../helper/common";
import MobileNavbar from "./MobileNavbar";
import Login from "../../auth/Login";
import { useState } from "react";
import { useSelector } from "react-redux";
import { convertToFa } from "../../../helper/functions";

function Header() {
  const navigate = useNavigate();
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
  const { isLoggedIn } = useSelector((state) => state.auth);
  const cartState = useSelector((state) => state.cart);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <header className="py-8 shadow">
      <div className="container">
        <div className="flex items-center justify-between gap-4 text-neneutral-700">
          <MobileNavbar />

          <NavLink to={ROUTES.HOME}>
            <Logo />
          </NavLink>

          <nav className="items-center hidden lg:flex gap-4 ">
            {navlinkList.map((item, index) => {
              return (
                <NavLink
                  key={index}
                  to={item.href}
                  className={({ isActive }) =>
                    cn("text-base", { "text-primary font-semibold": isActive })
                  }
                >
                  {item.text}
                </NavLink>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 [&>*]:p-2 [&>*]:bg-primary-100 [&>*]:rounded [&_svg]:fill-primary">
            <button
              className="hidden sm:block"
              onClick={() => navigate(ROUTES.RESULT)}
            >
              <Search />
            </button>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "bg-primary relative" : " relative"
              }
            >
              <ShoppingCart />
              {isLoggedIn && cartState.itemsCounter > 0 && (
                <span className="absolute -top-1 -right-1.5 text-[10px] text-white bg-primary-600 rounded-full px-1  md:right-0.5 md:top-0.5 font-medium">
                  {convertToFa(cartState.itemsCounter)}
                </span>
              )}
            </NavLink>

            <button
              onClick={() => {
                localStorage.getItem("email")
                  ? navigate(ROUTES.DASHBOARD)
                  : openModal();
              }}
            >
              <User className={"size-6"} />
            </button>

            <Login isOpen={isOpen} closeModal={closeModal} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

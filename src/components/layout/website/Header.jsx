import { NavLink } from "react-router";
import { Logo, Search, ShoppingCart, User } from "../../icons";
import ROUTES from "../../../router/routePath";
import { cn } from "../../../helper/common";
import MobileNavbar from "./MobileNavbar";

function Header() {
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
      href: ROUTES.FRANCHISE,
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
    <header className="py-8 shadow">
      <div className="container">
        <div className="flex items-center justify-between gap-4 text-neneutral-700">
          <MobileNavbar />

          <NavLink to={ROUTES.HOME}>
            <Logo />
          </NavLink>

          <nav className="items-center hidden md:flex gap-4 ">
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
            <button className="hidden sm:block">
              <Search />
            </button>
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? "bg-primary" : "")}
            >
              <ShoppingCart />
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "bg-primary" : "")}
            >
              <User />
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

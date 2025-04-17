import { cn } from "../helper/common";
import { NavLink } from "react-router";
import ROUTES from "../router/routePath";

function Tab() {
  return (
    <div className="py-3 bg-neutral-300">
      <div className="container flex items-center gap-x-4 md:gap-x-6">
        <NavLink
          to={ROUTES.FAQ}
          className={({ isActive }) =>
            cn("text-sm md:text-base", {
              "text-primary font-semibold border-b-2 pb-2 border-primary":
                isActive,
            })
          }
        >
          سوالات متداول
        </NavLink>
        <NavLink
          to={ROUTES.RULES}
          className={({ isActive }) =>
            cn("text-sm md:text-base", {
              "text-primary font-semibold border-b-2 pb-2 border-primary":
                isActive,
            })
          }
        >
          قوانین ترخیه
        </NavLink>
        <NavLink
          to={ROUTES.PRIVACY}
          className={({ isActive }) =>
            cn("text-sm md:text-base", {
              "text-primary font-semibold border-b-2 pb-2 border-primary":
                isActive,
            })
          }
        >
          حریم خصوصی
        </NavLink>
      </div>
    </div>
  );
}

export default Tab;

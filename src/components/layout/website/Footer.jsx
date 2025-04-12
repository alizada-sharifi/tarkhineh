import { Link } from "react-router";
import { Instagram, Telegram, X } from "../../icons";
import ROUTES from "../../../router/routePath";
import MessageForm from "./MessageForm";

function Footer() {
  return (
    <footer className="overflow-hidden text-white bg-center bg-cover bg-footer-layer">
      <div className="w-full h-full bg-black/85">
        <div className="container">
          <div className="py-10">
            <div className="grid grid-cols-12 gap-8">
              {/* ======================== LINKS ========================= */}
              <div className="col-span-6 space-y-5 md:col-span-4 lg:col-span-3">
                <p className="text-xl font-bold">{"دسترسی آسان"}</p>
                <div className="flex flex-col gap-4 text-sm">
                  <Link to={ROUTES.FAQ}>{"پرسش‌ های متداول"}</Link>
                  <Link to={ROUTES.TERMS}>{"قوانین ترخینه"}</Link>
                  <Link to={ROUTES.PRIVACY}>{"حریم خصوصی"}</Link>
                  <div className="flex items-center gap-3">
                    <Link to={ROUTES.TELEGRAM}>
                      <X />
                    </Link>
                    <Link to={ROUTES.INSTAGRAM}>
                      <Instagram />
                    </Link>
                    <Link to={ROUTES.X}>
                      <Telegram />
                    </Link>
                  </div>
                </div>
              </div>

              {/* ======================== BRANCH ========================= */}
              <div className="col-span-6 space-y-5 md:col-span-4 lg:col-span-3">
                <p className="text-xl font-bold">{"شعبه‌های ترخینه"}</p>
                <div className="flex flex-col gap-4 text-sm">
                  <Link to={ROUTES.HOME}>{"شعبه کابل"}</Link>
                  <Link to={ROUTES.HOME}>{"شعبه هرات"}</Link>
                  <Link to={ROUTES.HOME}>{"شعبه مزار"}</Link>
                  <Link to={ROUTES.HOME}>{"شعبه بامیان"}</Link>
                </div>
              </div>

              {/* =================== FORM =================== */}
              <div className="col-span-12 space-y-5 lg:col-span-6">
                <p className="text-xl font-bold">{"پیام به ترخینه "}</p>
                <MessageForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

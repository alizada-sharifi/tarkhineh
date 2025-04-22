import { Footer, Header } from "../components/layout/website";
import MobileHeader from "../components/MobileHeader";
import Sidbar from "../components/Sidbar";

function DashboardLayout({ title, children, header, trash }) {
  return (
    <>
      <Header />

      <div className="container mt-6 px-5 relative">
        <MobileHeader
          title={title}
          className={"relative justify-center "}
          iconClassName={"absolute right-0"}
          trash={trash}
        />

        <div className="flex gap-x-10 items-start mb-4">
          <Sidbar className={"hidden lg:block w-1/4 "} />

          <div className="lg:border border-neutral-400 p-4 flex-1 rounded-lg mb-8 w-3/4 relative ">
            <div className="relative flex items-center justify-between border-b-2 border-r-neutral-400 mb-4 pb-4">
              <h3 className="font-semibold  text-xl text-neutral-800 hidden md:block">
                {title}
              </h3>
              {header}
            </div>

            {children}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DashboardLayout;

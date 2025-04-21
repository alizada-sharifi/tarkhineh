import { Footer, Header } from "../components/layout/website";
import MobileHeader from "../components/MobileHeader";
import Sidbar from "../components/Sidbar";

function DashboardLayout({ title, children, header }) {
  return (
    <>
      <Header />

      <div className="container mx-auto mt-6 px-5 min-h-[calc(100vh_-_239px)] md:mt-10">
        <MobileHeader
          title={title}
          className={"relative justify-center "}
          iconClassName={"absolute right-0"}
        />

        <div className="flex gap-x-10 items-start">
          <Sidbar className={"hidden lg:block w-1/4 "} />

          <div className="lg:border border-neutral-400 p-4 flex-1 rounded-lg mb-8 w-3/4 relative ">
            <div className="relative flex items-center justify-between border-b-2 border-r-neutral-400">
              <h3 className="font-semibold mb-4 text-xl text-neutral-800  pb-3 hidden md:block">
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

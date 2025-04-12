import { Outlet } from "react-router";
import { Footer, Header } from "../components/layout/website";

function MainLayout() {
  return (
    <>
      <Header />
      <main className="flex flex-col grow">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;

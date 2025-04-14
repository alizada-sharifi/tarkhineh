import { useNavigate } from "react-router";
import { Banner } from "../components/banner";
import { Container } from "../components/branches";
import { Button } from "../components/buttons";
import { Note } from "../components/icons";
import { nonIrani } from "../data/branches/nonIrani";
import { offers } from "../data/branches/offers";
import { popular } from "../data/branches/popularFood";
import ROUTES from "../router/routePath";
import { Testmonial } from "../components/branches/testmonial";
import { SearchInput } from "../components/form";

function Branches() {
  const navigate = useNavigate();
  return (
    <>
      <Banner />
      <div className="container">
        <SearchInput />
      </div>

      <Container data={offers} id={"offers"} title={"غذاهای محبوب"} />
      <Container
        data={popular}
        id={"popular"}
        className={"bg-primary"}
        titleClassName={"text-white"}
        title={"غذاهای محبوب"}
      />
      <Container data={nonIrani} id={"nonIrani"} title={"غذاهای غیر ایرانی"} />

      <div className="text-center pb-8">
        <Button
          onClick={() => navigate(ROUTES.MENU)}
          className="bg-transparent border gap-2 text-primary flex  mx-auto border-primary"
        >
          <Note />
          <span className="text-xs md:text-base"> مشاهده منوی کامل </span>
        </Button>
      </div>

      <Testmonial />
    </>
  );
}

export default Branches;

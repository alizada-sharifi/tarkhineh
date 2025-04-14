import { Banner } from "../components/banner";
import { Container } from "../components/branches";
import { nonIrani } from "../data/branches/nonIrani";
import { offers } from "../data/branches/offers";
import { popular } from "../data/branches/popularFood";

function Branches() {
  return (
    <>
      <Banner />
      <Container data={offers} id={"offers"} title={"غذاهای محبوب"} />
      <Container
        data={popular}
        id={"popular"}
        className={"bg-primary"}
        titleClassName={"text-white"}
        title={"غذاهای محبوب"}
      />
      <Container data={nonIrani} id={"nonIrani"} title={"غذاهای غیر ایرانی"} />
    </>
  );
}

export default Branches;

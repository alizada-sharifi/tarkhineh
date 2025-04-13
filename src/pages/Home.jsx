import { Banner } from "../components/banner";
import { HomePageMenu } from "../components/home/homePageMenu";
import { Introduction } from "../components/home/introduction";
import { Branches } from "../components/home/branches";

function Home() {
  return (
    <>
      <Banner />
      <HomePageMenu />
      <Introduction />
      <Branches />
    </>
  );
}

export default Home;

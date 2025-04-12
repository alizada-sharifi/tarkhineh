import React from "react";
import { Banner } from "../components/banner";
import { HomePageMenu } from "../components/homePageMenu";
import { Introduction } from "../components/introduction";

function Home() {
  return (
    <>
      <Banner />
      <HomePageMenu />
      <Introduction />
    </>
  );
}

export default Home;

import React from "react";
import SEO from "../common/seo";
import HomeOne from "../components/homes/home";
import Wrapper from "../layout/wrapper";
import HomeSix from "../components/homes/home-6";

const Home = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Gencio"} />
       <HomeSix />
    </Wrapper>
  );
};

export default Home;

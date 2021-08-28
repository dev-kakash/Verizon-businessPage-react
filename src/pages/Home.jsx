import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import IntroSection from "../components/IntroSection";
import Items from "../components/Items";
import NavMenu from "../components/NavMenu";
import Services from "../components/Services";

const Home = () => {
  return (
    <div>
      <NavMenu />
      <HeroSection />
      <IntroSection />
      <Banner />
      <Items />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;

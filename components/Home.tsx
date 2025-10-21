"use client";

import Assurance from "./home/Assurance";
import Benefits from "./home/Benefits";
import Features from "./home/Features";
import Hero from "./home/Hero";
import ImageContainer from "./home/ImageContainer";
import Pricing from "./home/Pricing";

export const Home = () => {
  return (
    <div>
      <Hero />
      <ImageContainer />
      <Features />
      <Assurance />
      <Benefits />
      {/* <Pricing /> */}
    </div>
  );
};

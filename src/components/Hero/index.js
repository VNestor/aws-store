import React from "react";
import { Link } from "react-router-dom";
import { HeroSection, HeroH2, HeroBtn } from "./HeroElements";

const Hero = () => {
  return (
    <HeroSection>
      <HeroH2>Best Books Around</HeroH2>
      <Link to="/books">
        <HeroBtn>View All Books</HeroBtn>
      </Link>
    </HeroSection>
  );
};

export default Hero;

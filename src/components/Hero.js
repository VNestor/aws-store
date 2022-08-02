import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <h2>Best Books Around</h2>
      <Link classroom="btn" to="/books">
        View All Books
      </Link>
    </section>
  );
};

export default Hero;

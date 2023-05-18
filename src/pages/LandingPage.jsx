import React from "react";
import {
  Hero,
  About,
  Experience,
  Works,
  Feedbacks,
  Contact,
  Navbar,
} from "../components/landing/index";

const LandingPage = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        {/* <StarsCanvas /> */}
      </div>
    </div>
  );
};

export default LandingPage;

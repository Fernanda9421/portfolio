import React, { Component } from "react";
import HardSkillsSection from "./Components/HardSkillsSection/HardSkillsSection";
import Header from "./Components/Header/Header";
import Qualifications from "./Components/Qualifications/Qualifications";
import SoftSkillsSection from "./Components/SoftSkillsSection/SoftSkillsSection";
import TestimonialSection from "./Components/TestimonialSection/TestimonialSection";

class Home extends Component {
  render() {
    return (
      <>
        <main className="flex-shrink-0">
          <Header />

          <HardSkillsSection />
          <SoftSkillsSection />

          <TestimonialSection />

          <Qualifications />

        </main>
      </>
    );
  }
}

export default Home;

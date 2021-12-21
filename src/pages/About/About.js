import React from "react";
import AboutMe from "./Components/AboutMe/AboutMe";
import MyHistory from "./Components/MyHistory/MyHistory";
import GetInTouch from "./Components/GetInTouch/GetInTouch";
import OutOfLinkedin from "./Components/OutOfLinkedin/OutOfLinkedin";

class About extends React.Component {
  render() {
    return (
      <>
        <main className="flex-shrink-0">
          <AboutMe />
          <MyHistory />
          <OutOfLinkedin />
          <GetInTouch />
        </main>
      </>
    );
  }
}

export default About;

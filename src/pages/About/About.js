import "../../css/styles.css";
import React from "react";
import AboutMe from "./Components/AboutMe/AboutMe";
import MyHistory from "./Components/MyHistory/MyHistory";
import GoalsAndDreams from "./Components/GoalsAndDreams/GoalsAndDreams";
import GetInTouch from "./Components/GetInTouch/GetInTouch";

class About extends React.Component {
  render() {
    return (
      <>
        <main className="flex-shrink-0">
          <AboutMe />
          <MyHistory />
          <GoalsAndDreams />
          <GetInTouch />
        </main>
      </>
    );
  }
}

export default About;

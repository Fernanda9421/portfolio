import '../css/styles.css';
import React from 'react';
import AboutMe from '../components/AboutMe';
import MyHistory from '../components/MyHistory';
import GoalsAndDreams from '../components/GoalsAndDreams';
import GetInTouch from '../components/GetInTouch';

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

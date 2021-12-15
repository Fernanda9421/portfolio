import React, { Component } from "react";
import QualificationsSection from "./QualificationsSection";
import "./qualificationsTabs.css";
import WorkSection from "./WorkSection";

class QualificationsTabs extends Component {
  constructor() {
    super();

    this.state = {
      isClickedEducation: true,
      isClickedCarrer: false,
    };
  }

  render() {
    const { isClickedEducation } = this.state;
    return (
      <>
        <div className="d-flex justify-content-center mb-5">
          <div>
            <button
              onClick={() => this.setState({ isClickedEducation: true, isClickedCarrer: false })}
              className="btn btn-light d-flex align-items-center text-muted me-5"
            >
              <h3><i className="bi bi-mortarboard icons" /></h3>
              Educação
            </button>
          </div>
          <div>
            <button
              onClick={() => this.setState({ isClickedEducation: false, isClickedCarrer: true })}
              className="btn btn-light d-flex align-items-center text-muted button">
              <h3><i className="bi bi-briefcase icons" /></h3>
              Carreira
            </button>
          </div>
        </div>
        <>
          {
            isClickedEducation ?
              <QualificationsSection /> : <WorkSection />
          }
        </>
      </>
    );
  }
}

export default QualificationsTabs;

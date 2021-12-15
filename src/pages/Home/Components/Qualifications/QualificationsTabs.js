import React, { Component } from "react";
import "./qualificationsTabs.css";

class QualificationsTabs extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <div>
          <button className="btn btn-light d-flex align-items-center text-muted me-5">
            <h3><i className="bi bi-mortarboard icons" /></h3>
            Educação
          </button>
        </div>
        <div>
          <button className="btn btn-light d-flex align-items-center text-muted button">
            <h3><i className="bi bi-briefcase icons" /></h3>
            Carreira
          </button>
        </div>
      </div>
    );
  }
}

export default QualificationsTabs;

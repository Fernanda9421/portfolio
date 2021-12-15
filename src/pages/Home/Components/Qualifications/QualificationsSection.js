import React, { Component } from "react";
import "./qualificationsSection.css";

class QualificationsSection extends Component {
  render() {
    return (
      <div className="qualification__container">
        <div className="qualification__divOne lh-base">
          <div className="text-muted qualification__calendar">
            <i className="bi bi-calendar3 me-3 text-muted" />
            2013 - 2018
            <hr />
          </div>
          <h6 className="qualification__title">Nutrição</h6>
          <span className="text-muted">Universidade Federal de Lavras</span>
        </div>
        <div className="qualification__divTwo" />
        <div className="qualification__divThree" />
        <div className="qualification__divFour lh-base">
          <div className="text-muted">
            <i className="bi bi-calendar3 me-3 text-muted" />
            2021 - o momento
            <hr />
          </div>
          <h6 className="qualification__title">Desenvolvimento Web | FullStack</h6>
          <span className="text-muted">Trybe - Escola de Programação</span>
        </div>
      </div>
    );
  }
}

export default QualificationsSection;

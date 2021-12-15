import React, { Component } from "react";
import "./qualificationsSection.css";

class QualificationsSection extends Component {
  render() {
    return (
      <div className="qualification__container">
        <div className="qualification__divOne lh-base">
          <h5 className="text-muted">Nutrição</h5>
          <span className="text-muted">Universidade Federal de Lavras</span>
          <div className="text-muted">
            <i className="bi bi-calendar3 me-3 text-muted" />
            2013 - 2018
          </div>
        </div>
        <div className="qualification__divTwo" />
        <div className="qualification__divThree" />
        <div className="qualification__divFour lh-base">
        <h5 className="text-muted">Desenvolvimento Web | FullStack</h5>
          <span className="text-muted">Trybe - Escola de Programação</span>
          <div className="text-muted">
            <i className="bi bi-calendar3 me-3 text-muted" />
            2021 - o momento
          </div>
        </div>
      </div>
    );
  }
}

export default QualificationsSection;

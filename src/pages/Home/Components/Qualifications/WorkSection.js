import React, { Component } from "react";
import "./qualificationsSection.css";

class WorkSection extends Component {
  render() {
    return (
      <div className="qualification__container">
        <div className="qualification__divOne lh-base">
          <div className="text-muted">
            <i className="bi bi-calendar3 me-3 text-muted" />
            2018 - 2020
            <hr />
          </div>
          <h6 className="qualification__title">Gerente de Unidade | Nutricionista</h6>
          <span className="text-muted">Alibraz - Belo Horizonte, MG</span>
        </div>
        <div className="qualification__divTwo" />
        <div className="qualification__divThree" />
        <div className="qualification__divFour lh-base">
          <div className="text-muted">
            <i className="bi bi-calendar3 me-3 text-muted" />
            2020 - 2021
            <hr />
          </div>
          <h6 className="qualification__title">Gerente de Unidade | Nutricionista</h6>
          <span className="text-muted">Momo Confeitaria - Belo Horizonte, MG</span>
        </div>
      </div>
    );
  }
}

export default WorkSection;

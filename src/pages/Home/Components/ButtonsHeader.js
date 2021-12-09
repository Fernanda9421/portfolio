import React, { Component } from "react";

class ButtonsHeader extends Component {
  render() {
    return (
      <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
        <a
          className="btn btn-success btn-lg px-4 me-sm-3"
          href="#features"
        >
          Repositórios
        </a>
        <a className="btn btn-outline-light btn-lg px-4" href="#!">
          Sobre
        </a>
      </div>
    );
  }
}

export default ButtonsHeader;

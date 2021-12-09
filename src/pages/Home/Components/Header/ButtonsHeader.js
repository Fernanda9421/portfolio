import React, { Component } from "react";
import { Link } from "react-router-dom";

class ButtonsHeader extends Component {
  render() {
    return (
      <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
        <Link
          className="btn btn-success btn-lg px-4 me-sm-3"
          to="/portfolio"
        >
          Repositórios
        </Link>
        <Link
          className="btn btn-outline-light btn-lg px-4"
          to="/about"
        >
          Sobre
        </Link>
      </div>
    );
  }
}

export default ButtonsHeader;

import React, { Component } from "react";
import "./headerDescription.css";

class HeaderDescription extends Component {
  render() {
    return (
      <>
        <h1 className="line typing-animation">
          Olá, eu sou Fernanda Andrade! =)
        </h1>
        <p className="lead fw-normal text-white-50 mb-4">
          É um prazer ter você aqui.
        </p>
      </>
    );
  }
}

export default HeaderDescription;

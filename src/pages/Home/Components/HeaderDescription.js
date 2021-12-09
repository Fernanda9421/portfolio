import React, { Component } from "react";

class HeaderDescription extends Component {
  render() {
    return (
      <>
        <h1 className="display-5 fw-bolder text-white mb-2">
          Portfolio | Meus Projetos
        </h1>
        <p className="lead fw-normal text-white-50 mb-4">
          Quickly design and customize responsive mobile-first sites with
          Bootstrap, the world`s most popular front-end open source
          toolkit!
        </p>
      </>
    );
  }
}

export default HeaderDescription;

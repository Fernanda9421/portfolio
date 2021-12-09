import React, { Component } from "react";
import notFound from "../../assets/images/notFound.png";

class NotFound extends Component {
  render() {
    return (
      <div className="text-center">
        <img className="rounded" width='508' src={ notFound } alt="Página não encontrada" />
      </div>
    );
  }
}

export default NotFound;

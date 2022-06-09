import React, { Component } from "react";

class ButtonWhatsapp extends Component {
  render() {
    return (
      <button type="button" className="btn btn-ligth">
          <a
            href="http://wa.me/351912811586"
            rel="noreferrer" target="_blank">
            <h2><i className="bi bi-whatsapp" /></h2>
          </a>
        </button>
    );
  }
}

export default ButtonWhatsapp;

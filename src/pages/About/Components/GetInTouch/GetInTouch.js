import React, { Component } from "react";
import ButtonsContact from "../../../../Components/ButtonsContact/ButtonsContact";

class GetInTouch extends Component {
  render() {
    return (
      <section className="py-5 bg-light">
        <div className="container px-5 my-5">
          <div className="text-center">
            <h2 className="fw-bolder">Contatos</h2>
            <p className="lead fw-normal text-muted mb-5">
              Onde me encontrar
            </p>
          </div>
          <ButtonsContact />
        </div>
      </section>
    );
  }
}

export default GetInTouch;

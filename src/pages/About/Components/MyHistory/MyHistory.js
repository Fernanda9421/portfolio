import React, { Component } from "react";
import "./myHistory.css";

class MyHistory extends Component {
  render() {
    return (
      <section className="py-5 bg-light" id="scroll-target">
        <div className="container px-5 my-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
              <img
                className="img-fluid rounded mb-5 mb-lg-0"
                src="https://dummyimage.com/600x400/343a40/6c757d"
                alt="..."
              />
            </div>
            <div className="col-lg-6">
              <h3>Minha História</h3>
              <p className="lead fw-normal text-muted mb-0">
                Nasci e morei grande parte da minha vida em uma pequena cidade no Sul de Minas Gerais. Desde pequena, sempre incentivada pelos meus pais, soube que educação é o bem mais precioso que podemos ter.
                <p>Em 2008, me formei em Nutrição pela Universidade Federal de Lavras. Foram anos intensos, e de muito aprendizado.</p>
                <p>Motivada pelo desejo de aprender algo novo, resolvi tentar minha transição de carreira para a área de tecnologia, com a certeza de que tudo que aprendi e vivenciei desde então foi válido, e nada foi perdido!</p>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MyHistory;

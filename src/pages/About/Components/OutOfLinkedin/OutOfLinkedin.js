import React, { Component } from "react";
import trips from "../../../../assets/images/myHistoryTwo.jpg";

class OutOfLinkedin extends Component {
  render() {
    return (
      <section className="py-5">
        <div className="container px-5 my-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6 order-first order-lg-last">
              <img
                className="img-fluid rounded mb-5 mb-lg-0"
                src={ trips }
                alt="Colagem de imagens"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="fw-bolder">Fora do LinkedIn</h2>
              <p className="lead fw-normal text-muted mb-0">
                Sou uma pessoa apaixonada por animais, em especial, por cachorros.
                Esse é o Gordon, o dono da casa!
              </p>
              <p className="lead fw-normal text-muted mb-0">
                Outra paixão que carrego comigo, desde que cursei Nutrição, é a cozinha. Acredito que cozinhar é uma forma de demonstração de amor, e o que me dá mais prazer é ver a reação das pessoas ao comer algo que eu fiz!
              </p>
              <p className="lead fw-normal text-muted mb-0">
                Nos meus dias vagos, gosto de viajar e conhecer novos lugares. Meus destinos favoritos são locais onde posso ficar mais próxima da natureza, como trilhas e cachoeiras. Acredito que preciso estar bem comigo mesmo para desempenhar um bom trabalho em minha vida profissional, e esses lugares são excelentes refúgios de descanso.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default OutOfLinkedin;

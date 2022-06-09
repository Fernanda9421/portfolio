import React, { Component } from "react";

class AboutMe extends Component {
  render() {
    return (
      <header className="py-5">
        <div className="container px-5">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-xxl-12">
              <div className="my-5">
                <h1 className="fw-bolder mb-3">Sobre mim</h1>
                <p className="lead fw-normal text-muted mb-4">
                  Olá, meu nome é Fernanda, tenho 27 anos e moro em Sintra, Portugal.
                  <p>Atualmente, sou estudante de Desenvolvimento Web.</p>
                  <p>Não gosto de me definir pelo que fiz até o momento, e sim pelo trabalho que quero fazer. Continuo aprendendo e me desafiando todos os dias, e sigo fazendo o que realmente importa para mim.</p>
                  <p>Acredito que, quando estamos em nossa zona de conforto, não sabemos do que realmente somos capazes, e por isso, me motivo à procurar algo novo diariamente.</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default AboutMe;

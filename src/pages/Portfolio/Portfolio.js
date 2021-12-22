import React from "react";
import ProjectLlist from "./Components/ProjectList/ProjectLlist";

function Portfolio() {
  return (
    <>
      <main className="flex-shrink-0">
        {/* Conteúdo Principal */}
        <section className="py-5">
          <div className="container px-5 my-5">
            <div className="text-center mb-5">
              <h1 className="fw-bolder">Meus Projetos</h1>
              <p className="lead fw-normal text-muted mb-0">github portfolio</p>
            </div>
            <div className="row gx-5">
              <ProjectLlist />
            </div>
          </div>
        </section>
        <section className="py-5 bg-light">
          <div className="container px-5 my-5">
            <h2 className="display-4 fw-bolder mb-4">
              Vamos construir algo juntos
            </h2>
            {/* <a className="btn btn-lg btn-primary" href="#!">
              Contato
            </a> */}
          </div>
        </section>
      </main>
    </>
  );
}

export default Portfolio;

import React, { Component } from 'react'

class GetInTouch extends Component {
  render() {
    return (
      <section className="py-5 bg-light">
        <div className="container px-5 my-5">
          <div className="text-center">
            <h2 className="fw-bolder">Mídias Sociais</h2>
            <p className="lead fw-normal text-muted mb-5">
              Onde me encontrar
            </p>
          </div>
          <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
            <a href="https://www.linkedin.com/in/fernandaacarvalho/" rel="noreferrer" target="_blank">
              <h2><i class="bi bi-linkedin" /></h2>
            </a>
            <a href="https://github.com/Fernanda9421" rel="noreferrer" target="_blank">
              <h2><i class="bi bi-github" /></h2>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default GetInTouch;

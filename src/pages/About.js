import '../css/styles.css';
import React from 'react';

class About extends React.Component {
  render() {
    return (
      <>
        <main className="flex-shrink-0">
          {/* <!-- Header--> */}
          <header className="py-5">
            <div className="container px-5">
              <div className="row justify-content-center">
                <div className="col-lg-12 col-xxl-12">
                  <div className="my-5">
                    <h1 className="fw-bolder mb-3">Sobre mim</h1>
                    <p className="lead fw-normal text-muted mb-4">
                      Breve apresentação pessoal
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* <!-- About section one--> */}
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
                  <h2 className="fw-bolder">Minha História</h2>
                  <p className="lead fw-normal text-muted mb-0">
                    De onde vim, acontecimentos
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- About section two--> */}
          <section className="py-5">
            <div className="container px-5 my-5">
              <div className="row gx-5 align-items-center">
                <div className="col-lg-6 order-first order-lg-last">
                  <img
                    className="img-fluid rounded mb-5 mb-lg-0"
                    src="https://dummyimage.com/600x400/343a40/6c757d"
                    alt="..."
                  />
                </div>
                <div className="col-lg-6">
                  <h2 className="fw-bolder">Objetivos &amp; Sonhos</h2>
                  <p className="lead fw-normal text-muted mb-0">
                    Objetivos
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Team members section--> */}
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
        </main>
      </>
    );
  }
}

export default About;

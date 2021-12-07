import '../css/styles.css';

function Portfolio() {
  return (
    <>
      <main className="flex-shrink-0">
        {/* // Navigation */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container px-5">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">
                    About
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownPortfolio"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Portfolio
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownPortfolio"
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        href="portfolio-overview.html"
                      >
                        Portfolio Overview
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="portfolio-item.html">
                        Portfolio Item
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Conteúdo Principal */}
        <section className="py-5">
          <div className="container px-5 my-5">
            <div className="text-center mb-5">
              <h1 className="fw-bolder">Nossos Projetos</h1>
              <p className="lead fw-normal text-muted mb-0">github portfolio</p>
            </div>
            <div className="row gx-5">
              <div className="col-lg-6">
                <div className="position-relative mb-5">
                  <img
                    className="img-fluid rounded-3 mb-3"
                    src="https://dummyimage.com/600x400/343a40/6c757d"
                    alt="..."
                  />
                  <a
                    className="h3 fw-bolder text-decoration-none link-dark stretched-link"
                    href="#!"
                  >
                    Project name
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="position-relative mb-5">
                  <img
                    className="img-fluid rounded-3 mb-3"
                    src="https://dummyimage.com/600x400/343a40/6c757d"
                    alt="..."
                  />
                  <a
                    className="h3 fw-bolder text-decoration-none link-dark stretched-link"
                    href="#!"
                  >
                    Project name
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="position-relative mb-5 mb-lg-0">
                  <img
                    className="img-fluid rounded-3 mb-3"
                    src="https://dummyimage.com/600x400/343a40/6c757d"
                    alt="..."
                  />
                  <a
                    className="h3 fw-bolder text-decoration-none link-dark stretched-link"
                    href="#!"
                  >
                    Project name
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="position-relative">
                  <img
                    className="img-fluid rounded-3 mb-3"
                    src="https://dummyimage.com/600x400/343a40/6c757d"
                    alt="..."
                  />
                  <a
                    className="h3 fw-bolder text-decoration-none link-dark stretched-link"
                    href="#!"
                  >
                    Project name
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5 bg-light">
          <div className="container px-5 my-5">
            <h2 className="display-4 fw-bolder mb-4">
              Let's build something together
            </h2>
            <a className="btn btn-lg btn-primary" href="#!">
              Contact us
            </a>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-dark py-4 mt-auto">
        <div className="container px-5">
          <div className="row align-items-center justify-content-between flex-column flex-sm-row">
            <div className="col-auto">
              <div className="small m-0 text-white">
                Copyright &copy; Your Website 2021
              </div>
            </div>
            <div className="col-auto">
              <a className="link-light small" href="#!">
                Privacy
              </a>
              <span className="text-white mx-1">&middot;</span>
              <a className="link-light small" href="#!">
                Terms
              </a>
              <span className="text-white mx-1">&middot;</span>
              <a className="link-light small" href="#!">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Portfolio;

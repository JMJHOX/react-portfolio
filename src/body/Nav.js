import React, { useState, useEffect } from "react";

export function Nav() {
  const [clicked, setClicked] = useState("");

  useEffect(() => {
    window.onscroll = () => {
      window.pageYOffset === 0 ? setClicked("") : setClicked("navbar-scrolled");
    };

    return () => (window.onscroll = null);
  });

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light fixed-top py-3 ${clicked}`}
      id="mainNav"
    >
      <div className="container">
        <a
          className="navbar-brand js-scroll-trigger "
          href="#page-top"
        >
          Go Top
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto my-2 my-lg-0">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">
                Sobre mi
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#services">
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#portfolio">
                Portafolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#contact">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

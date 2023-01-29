import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="bg-custom footer py-3">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <p className="text-white">
              &copy; Mi Aplicación | Todos los derechos reservados
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <a href="#">
            <i className="fab fa-facebook fa-2x mx-3 text-white" />
          </a>
          <a href="#">
            <i className="fab fa-twitter fa-2x mx-3 text-white" />
          </a>
          <a href="#">
            <i className="fab fa-instagram fa-2x mx-3 text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

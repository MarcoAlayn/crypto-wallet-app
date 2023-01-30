import React from "react";
import "./Header.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-backgroundHeader">
      <a className="navbar-brand" style={{ marginLeft: "50px" }} href="#">
        Crypto Wallet App
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{ marginRight: "50px" }}
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav  mr-auto">
          <li className="nav-item ">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Cryptocurrencies <span className="sr-only">(current)</span>
            </a>
          </li>{" "}
          <li className="nav-item">
            <a className="nav-link" href="#">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Prices
            </a>
          </li>
        </ul>
        <div className="navbar-nav ml-auto" style={{ marginRight: "50px" }}>
          <a
            className="btn btn-outline-light"
            style={{ marginRight: "10px" }}
            href="#"
          >
            Sign In
          </a>
          <a className="btn btn-light" href="#">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;

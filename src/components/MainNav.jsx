import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function MainNav() {
  const [toggleClass, setToggleClass] = useState("");

  const openSideNav = (_) => {
    setToggleClass("d-block bg-light position-absolute side-nav");
  };
  const closeSideNav = (_) => {
    setToggleClass("d-none");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-4">
        <div className="container">
          <a className="navbar-brand" href="#Home">Thyme-Out</a>
          <button className="navbar-toggler" onClick={openSideNav}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${toggleClass}`}>
            <button className="d-lg-none btn border text-secondary" onClick={closeSideNav}>x</button>
            <ul className="nav navbar-nav mr-auto ms-lg-5">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item ms-lg-4">
                <a className="nav-link" href="#menu">
                  Menu
                </a>
              </li>
              <li className="nav-item ms-lg-4">
                <a className="nav-link" href="#meal">
                  Meal Plans
                </a>
              </li>
            </ul>
            <ul className="nav navbar-nav ps-lg-5 ms-lg-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  <FontAwesomeIcon icon={faSearch} />
                </a>
              </li>
              <li className="nav-item ms-lg-2">
                <a className="nav-link" href="#home">
                  <FontAwesomeIcon icon={faShoppingCart} /> <span className="d-lg-none">My Tray</span>
                </a>
              </li>
              <li className="nav-item ms-lg-5">
                <a className="nav-link" href="#meanu">
                  Sign in
                </a>
              </li>
              <li className="nav-item ms-lg-5">
                <a
                  className="nav-link btn bg-danger text-light rounded-pill px-lg-4 "
                  href="#meal"
                >
                  Create Account
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MainNav;

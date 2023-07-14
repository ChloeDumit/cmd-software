import React from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import short_logo from "../../assets/lottie/logo.json";
import DisplayLottie from "../displayLottie/DisplayLottie";
function Header() {
  return (
    <Headroom>
      <header className="header">
        <a href="/" className="logo">
          <DisplayLottie animationData={short_logo} />
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <a href="#services">Servicios</a>
          </li>
          <li>
            <a href="#about">Sobre Nosotros</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
          <li></li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;

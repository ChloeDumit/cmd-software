import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import { greeting, services } from "../../portfolio";
import logo from "../../assets/logo.png";
function Header() {
  const viewServices = services.display;

  return (
    <Headroom>
      <header className="header">
        <a href="/" className="logo">
          <img src={logo} />{" "}
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
            <a href="#about-us">Sobre Nosotros</a>
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

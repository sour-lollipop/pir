import React, { useState } from "react";
import logo from "../images/logo.jpg";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h1>ПИР</h1>
      </div>
      {window.innerWidth > 700 ? (
        <>
          <nav>
            <ul>
              <li>
                <a href="#about">О нас</a>
              </li>
              <li>
                <a href="#services">Услуги</a>
              </li>
              <li>
                <a href="#advantages">Преимущества</a>
              </li>
              <li>
                <a href="#contact">Контакты</a>
              </li>
            </ul>
          </nav>
          <div className="button"><a href="https://wa.me/87084189639">Связаться с нами</a></div>
        </>
      ) : (
        <>
          <button className="burger" onClick={toggleMenu}>
            ☰
          </button>
          {menuOpen && (
            <div className="side-menu">
              <button onClick={() => setMenuOpen(false)}>x</button>
              <ul>
                <li>
                  <a href="#about" onClick={() => setMenuOpen(false)}>О нас</a>
                </li>
                <li>
                  <a href="#services" onClick={() => setMenuOpen(false)}>Услуги</a>
                </li>
                <li>
                  <a href="#advantages" onClick={() => setMenuOpen(false)}>Преимущества</a>
                </li>
                <li>
                  <a href="#contact" onClick={() => setMenuOpen(false)}>Контакты</a>
                </li>
          <div className="button" onClick={() => setMenuOpen(false)}><a href="https://wa.me/87084189639">Связаться с нами</a></div>
          </ul>
            </div>
          )}
        </>
      )}
    </header>
  );
};

export default Header;

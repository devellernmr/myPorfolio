import React, { useState } from "react";
import "./navbar.css";
import { AiFillGithub } from "react-icons/ai";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const [active, setActive] = useState("navBar");
  //Função para abrir e fechar o menu
  const showNav = () => {
    if (active === "navBar") {
      setActive("navBar activeNavbar");
    } else {
      setActive("navBar");
    }
  };
  const removeNav = () => {
    if (active === "navBar") {
      setActive("navBar");
    } else {
      setActive("navBar");
    }
  };
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="https://github.com/devellernmr" className="logo btn">
            <h1>LeoEller</h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#home" className="navLink">
                Home
              </a>
            </li>

            <li className="navItem">
              <a href="#produtos" className="navLink">
                Produtos
              </a>
            </li>

            <li className="navItem">
              <a href="#sobre" className="navLink">
                Sobre
              </a>
            </li>

            <li className="navItem">
              <a href="#contatos" className="navLink">
                Contatos
              </a>
            </li>
          </ul>

          <div onClick={removeNav} className="closeNavbar">
            <IoIosCloseCircleOutline className="icon" />
          </div>
        </div>

        <div className="btn github-btn">
          <a href="https://github.com/LeoEller">
            <AiFillGithub className="icon" />
          </a>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar
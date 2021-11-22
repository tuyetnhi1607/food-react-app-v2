import React, {useEffect} from "react";
import logo from "../assets/logo.png";
import "./header.scss";

const listNav = [
  {
    name: "Home",
    path: "#home",
  },
  {
    name: "About",
    path: "#about",
  },
  {
    name: "Popular",
    path: "#popular",
  },
  {
    name: "Menu",
    path: "#menu",
  },
  {
    name: "Order",
    path: "#order",
  },
];

function active(){
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

function Header() {
  return (
    <>
      <div className="header">
        <div className="header-logo">
          <img src={logo} alt="logo" />
          <span className="header-logo-name">food</span>
        </div>
        <div className="header-nav">
          {listNav.map((item, i) => (
            <a className="header-nav-item" href={item.path}>
              {item.name}
            </a>
          ))}
        </div>
        <div className="header-icons">
          <div
            id="hamburger"
            className="header-icons-container humburger"
            onClick={active}
          >
            <i class="bx bx-menu"></i>
          </div>
          <div className="header-icons-container">
            <i class="bx bx-search"></i>
          </div>
          <div className="header-icons-container">
            <div className="badge" id="badge">0</div>
            <i class="bx bx-cart"></i>
          </div>
          <div className="header-icons-container">
            <i class="bx bxs-user-circle"></i>
          </div>
        </div>
      </div>
      <div className="nav" id="nav">
        {listNav.map((item, i) => (
          <a className="nav-item" onClick={active} href={item.path}>
            {item.name}
          </a>
        ))}
      </div>
    </>
  );
}

export default Header;

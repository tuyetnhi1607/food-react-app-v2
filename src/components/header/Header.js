import React from 'react'
import logo from '../assets/logo.png';
import './header.scss';

const listNav=[
    {
        name: 'Home',
    },
    {
        name: 'About',
    },
    {
        name: 'Popular',
    },
    {
        name: "menu",
    },
    {
        name: 'order',
    },
    {
        name: 'blogs',
    }
];

function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="logo" />
        <span className="header-logo-name">food</span>
      </div>
      <div className="header-nav">
        {listNav.map((item, i) => (
          <a className="header-nav-item">{item.name}</a>
        ))}
      </div>
      <div className="header-icons">
        <div className="header-icons-container humburger">
          <i class="bx bx-menu"></i>
        </div>
        <div className="header-icons-container">
          <i class="bx bx-search"></i>
        </div>
        <div className="header-icons-container">
          <i class="bx bx-cart"></i>
        </div>
        <div className="header-icons-container">
          <i class="bx bxs-user-circle"></i>
        </div>
      </div>
    </div>
  );
}

export default Header

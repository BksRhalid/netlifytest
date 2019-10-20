import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
  <header id="page-top">
    <div id="mainNav">
      <div>
        <a className="menu-toggle rounded" href="#">
          <i className="fa fa-bars"></i>
        </a>
          <nav id="sidebar-wrapper" >
            <ul className="sidebar-nav">
              <li className="sidebar-brand">
                <a className="js-scroll-trigger" href="#">Boursocredit</a>
              </li>
              <li className="sidebar-nav-item" >
                <a className="js-scroll-trigger" align="right" href="#page-top">Home</a>
              </li>
              <li className="sidebar-nav-item">
                <a className="js-scroll-trigger" align="right" href="#contact">Contact</a>
              </li>
            </ul>
        </nav>
      </div>
      <div align="left">
        <img src="img/logo_gif.gif" id="logo"></img>
      </div>
    </div>
    <a className="scroll-to-top rounded js-scroll-trigger" href="#page-top">
      <i className="fa fa-angle-up"></i>
    </a>
  </header>
);

export default Header;

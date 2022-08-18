import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { ReactComponent as CloseMenu } from "../../assets/x.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import logo from "../../assets/2.png";
import "./Header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header mb-5">
      <div className="logo-nav">
        <div className="logo-container">
          <a href="#">
            {/* <Logo className="logo" /> */}
            <img src={logo} alt="logo" height={200} width={200} />
          </a>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <NavLink to="/">CONTACT</NavLink>
          </li>
         
          <li className="option" onClick={closeMobileMenu}>
            <NavLink to="/videoblog">VIDEO BLOG</NavLink>
          </li>
          <li className="option mobile-option" onClick={closeMobileMenu}>
            <NavLink to="/">SIGN IN</NavLink>
          </li>
          <li className="option mobile-option" onClick={closeMobileMenu}>
            <NavLink to="/">SIGN UP</NavLink>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <NavLink to="/adminSection">Content Admin</NavLink>
          </li>
        </ul>
      </div>
        <ul className="signin-up">
          <li className="sign-in" onClick={closeMobileMenu}>
            <a href="#">SIGN-IN</a>
          </li>
          <li onClick={closeMobileMenu}>
            <a href="" className="signup-btn">
              SIGN-UP
            </a>
          </li>
        </ul>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <h1>
          Aline <span>Müller</span> Pasetti
        </h1>
      </NavLink>
      <ul>
        <li>
          <NavLink activeClassName="currently-active__link" exact to="/">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="currently-active__link" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="currently-active__link" to="/skills">
            Skills
          </NavLink>
        </li>

        <a
          className="cv__button"
          href="https://www.canva.com/design/DAD3jiVA0Po/7CsSmX43hROqvyEAXPACQw/view?utm_content=DAD3jiVA0Po&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
          target="__blank"
        >
          See my CV
        </a>
      </ul>

      <footer>
        <a href="https://github.com/alinepasetti/" target="__blank">
          <img className="social-media__icon" src="images/github.svg" alt="github-icon" />
        </a>
        <a href="https://www.linkedin.com/in/alinemullerpasetti" target="__blank">
          <img className="social-media__icon" src="images/linkedin.svg" alt="linkedin-icon" />
        </a>
        <a href="mailto:pasettialine@gmail.com">
          <img className="social-media__icon" src="images/mail.svg" alt="mail-icon" />
        </a>
        <a href="mailto:pasettialine@gmail.com">alinepasetti@gmail.com</a>
      </footer>
    </nav>
  );
};

export default NavBar;

/* eslint-disable max-len */
import {NavLink} from 'react-router-dom';
import React, {useState} from 'react';

const Navbar = () => {
  const [hamburgerState, setHamburgerState] = useState(false);

  const openHamburger = function() {
    if (hamburgerState === false) {
      setHamburgerState(true);
    } else {
      setHamburgerState(false);
    }
  };

  return (
    <nav className="navbar-wrapper">
      <ul className="menu">
        <li className="logo-wrapper">
          <a className="logo">
            <NavLink to= "/">
              <img alt="logo" src={require('../images/dog-logo.jpg')}></img>
            </NavLink>
          </a>
        </li>
        <li className="hamburger">
          <a className="list-icon">
            <img onClick={openHamburger} alt="list-icon" src={require('../images/List.jpg')}></img>

          </a>
          <div className={`hamburger-list ${!hamburgerState ? 'hamburger-closed' : 'hamburger-opened'}`}>
            <ul>
              <li>
                <a href="/alldogs">All Dogs</a>
              </li>
              <li>
                <a href="/retrievers">Retriever</a>
              </li>
              <li>
                <a href="/bulldogs">Bulldog</a>
              </li>
              <li>
                <a href="/corgis">Corgi</a>
              </li>
              <li>
                <a href="/samoyeds">Samoyed</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>

      <ul className="dropdown">
        <li className="search-icon">
          <a>
            <NavLink to= "">
              <img alt="search-icon" src={require('../images/MagnifyingGlass.jpg')}></img>
            </NavLink>
          </a>
        </li>
        <li className="nav-link">
          <a>
            <NavLink to= "/alldogs">
              All dogs
            </NavLink>
          </a>
        </li>
        <li className="nav-link">
          <a>
            <NavLink to= "/retrievers">
              Retriever
            </NavLink>
          </a>
        </li>
        <li className="nav-link">
          <a>
            <NavLink to= "/bulldogs">
            Bulldog
            </NavLink>
          </a>
        </li>
        <li className="nav-link">
          <a>
            <NavLink to= "/corgis">
            Corgi
            </NavLink>
          </a>
        </li>
        <li className="nav-link">
          <a>
            <NavLink to= "/samoyeds">
            Samoyed
            </NavLink>
          </a>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;

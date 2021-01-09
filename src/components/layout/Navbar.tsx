import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <ul id="dropdown" className="dropdown-content">
        <li>
          <Link to="/patients/male">Male</Link>
        </li>
        <li className="divider"></li>
        <li>
          <Link to="/patients/female">Female</Link>
        </li>
      </ul>
      <nav>
        <div className="nav-wrapper blue-grey darken-2">
          <Link to="/" className="brand-logo" style={{ marginLeft: "1rem" }}>
            Journalify
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <a className="dropdown-trigger" href="#!" data-target="dropdown">
                Dropdown<i className="material-icons right">arrow_drop_down</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

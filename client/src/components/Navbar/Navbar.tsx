import React from "react";
import logo from "../../assets/logo_transparent.png";

export interface NavbarProps {
  navData?: Array<string>;
}

const Navbar: React.StatelessComponent<NavbarProps> = ({ navData }) => {
  return (
    <header>
      <div className="logo">
        <img src={logo} width={150} height={70} />
      </div>
      <input type="checkbox" id="nav-toggle" className="nav-toggle" />
      <nav>
        <ul>
          {navData &&
            navData.map(data => (
              <li>
                <a>{data}</a>
              </li>
            ))}
        </ul>
      </nav>
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span />
      </label>
    </header>
  );
};

export default Navbar;

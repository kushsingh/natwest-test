import React from "react";

import { NAME } from "../../../constants";

import "./header.scss";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand fixed-top bg-light">
        <div className="container-fluid">
          <div className="page-title">
            <span className="logo">{NAME}</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

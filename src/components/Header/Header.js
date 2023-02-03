import React from "react";

const Header = () => {
  return (
    <nav
      className="navbar bg-body-tertiary"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          MyBookStore
        </a>
        <button className="btn btn-outline-primary" type="button">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Header;

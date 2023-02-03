import React, { Fragment } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const { error } = useSelector((state) => state.books);
  return (
    <Fragment>
      {error ? (
        <div className="alert alert-danger mb-0" role="alert">
          {error}
        </div>
      ) : null}

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
    </Fragment>
  );
};

export default Header;

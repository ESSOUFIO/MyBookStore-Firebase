import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logInOut } from "../../Store/authSlice";

const Header = () => {
  const { error } = useSelector((state) => state.books);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

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
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => dispatch(logInOut())}
            style={{ display: isLoggedIn ? "none" : "block" }}
          >
            Login
          </button>
          <button
            className="btn btn-outline-primary"
            type="button"
            onClick={() => dispatch(logInOut())}
            style={{ display: isLoggedIn ? "block" : "none" }}
          >
            Logout
          </button>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;

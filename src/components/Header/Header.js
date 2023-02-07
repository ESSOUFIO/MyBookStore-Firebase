import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logInOut } from "../../Store/authSlice";
import { toggleTheme } from "../../Store/uiSlice";

const Header = () => {
  const { error } = useSelector((state) => state.books);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { mode, textMode } = useSelector((state) => state.ui);

  const dispatch = useDispatch();

  return (
    <Fragment>
      {error ? (
        <div className="alert alert-danger mb-0" role="alert">
          {error}
        </div>
      ) : null}

      <nav
        className={`navbar navbar-${mode} fixed-top bg-${mode}`}
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            MyBookStore
          </a>

          <div className="d-flex align-items-center ">
            <div className="me-5 ">
              <div
                className="form-check form-switch"
                style={{ cursor: "pointer" }}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  onClick={() => dispatch(toggleTheme())}
                  id="theme"
                  style={{ cursor: "pointer" }}
                />
                <label
                  className={`form-check-label text-${textMode} `}
                  htmlFor="theme"
                >
                  Dark Mode
                </label>
              </div>
            </div>

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
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;

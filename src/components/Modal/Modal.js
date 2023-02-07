import "./Modal.css";
import React from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { showHideModal } from "../../Store/uiSlice";

const Back = () => {
  const dispatch = useDispatch();
  return (
    <div className="Back" onClick={() => dispatch(showHideModal("Back"))}></div>
  );
};

const Overlay = ({ children }) => {
  return <div className="Overlay text-white bg-dark">{children}</div>;
};

const Modal = ({ children }) => {
  const { modal } = useSelector((state) => state.ui);
  return (
    <div>
      {ReactDOM.createPortal(
        <div className={`${modal ? "show" : "hide"}  text-white bg-dark`}>
          <Back />
          <Overlay>{children}</Overlay>
        </div>,
        document.getElementById("modal")
      )}
    </div>
  );
};

export default Modal;

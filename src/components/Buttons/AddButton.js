import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showHideModal } from "../../Store/uiSlice";

const AddButton = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <div className="text-center mb-5">
      <button
        className="btn btn-success shadow"
        disabled={!isLoggedIn}
        onClick={() => dispatch(showHideModal("Insert"))}
      >
        Insert Book
      </button>
    </div>
  );
};

export default AddButton;

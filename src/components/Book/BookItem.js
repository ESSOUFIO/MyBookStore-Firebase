import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBook } from "../../Store/bookSlice";
import { showHideModal } from "../../Store/uiSlice";

const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  const { bookSelected } = useSelector((state) => state.books);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { mode, textMode } = useSelector((state) => state.ui);

  let BgLineSelected = "white";
  let borderLine = "1px solid lightgray";
  let borderRadiusLine = "0";
  let colorText = "black";

  if (bookSelected && book.id === bookSelected.id) {
    BgLineSelected = mode === "light" ? "#C3DFD3" : "#0a024c";
    borderLine = "2px solid gray";
    colorText = textMode === "light" ? "white" : "black";
    borderRadiusLine = "5px";
  } else {
    BgLineSelected = mode === "light" ? "white" : "transparent";
    colorText = textMode === "light" ? "white" : "black";
    borderLine = "1px solid lightgray";
    borderRadiusLine = "0";
  }

  return (
    <div
      className={`list-group-item d-block d-md-flex justify-content-between rounded-1`}
      style={{
        backgroundColor: BgLineSelected,
        color: colorText,
        border: borderLine,
        borderRadius: borderRadiusLine,
      }}
    >
      <h6 className={`m-0 pt-2 w-100 text-center text-md-start`}>
        {book.title}
      </h6>

      <div
        className="btn-group w-100 mb-1 my-md-0  my-3 flex-shrink-1 justify-content-center justify-content-md-end"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button
          type="button"
          className="btn btn-primary flex-grow-0  "
          onClick={() => dispatch(selectBook(book))}
        >
          Read
        </button>
        <button
          type="button"
          className="btn btn-danger flex-grow-0 "
          onClick={() =>
            dispatch(() => {
              dispatch(selectBook(book));
              return dispatch(showHideModal("Delete"));
            })
          }
          disabled={!isLoggedIn}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookItem;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBook } from "../../Store/bookSlice";
import { showHideModal } from "../../Store/uiSlice";

const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  const { bookSelected } = useSelector((state) => state.books);
  const { isLoggedIn } = useSelector((state) => state.auth);

  let BgLineSelected = "white";
  let borderLine = "1px solid lightgray";
  let borderRadiusLine = "0";
  if (bookSelected && book.id === bookSelected.id) {
    BgLineSelected = "#C3DFD3";
    borderLine = "2px solid gray";
    borderRadiusLine = "5px";
  } else {
    BgLineSelected = "white";
    borderLine = "1px solid lightgray";
    borderRadiusLine = "0";
  }

  return (
    <div
      className="list-group-item d-flex justify-content-between"
      style={{
        backgroundColor: BgLineSelected,
        border: borderLine,
        borderRadius: borderRadiusLine,
      }}
    >
      <h6 className="m-0 pt-2">{book.title}</h6>

      <div
        className="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => dispatch(selectBook(book))}
        >
          Read
        </button>
        <button
          type="button"
          className="btn btn-danger"
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

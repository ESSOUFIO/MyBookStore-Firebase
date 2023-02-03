import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook, selectBook } from "../../Store/bookSlice";

const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  const { bookSelected } = useSelector((state) => state.books);
  const { isLoggedIn } = useSelector((state) => state.auth);

  let BgLineSelected = "white";
  if (bookSelected && book.id === bookSelected.id) {
    BgLineSelected = "#F1F8FE";
  } else {
    BgLineSelected = "white";
  }

  return (
    <div
      className="list-group-item d-flex justify-content-between"
      style={{ backgroundColor: BgLineSelected }}
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
          onClick={() => dispatch(deleteBook(book))}
          disabled={!isLoggedIn}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookItem;

import React from "react";
import { useDispatch } from "react-redux";
import { deleteBook } from "../../Store/bookSlice";

const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <div className="list-group-item d-flex justify-content-between">
      <h6 className="m-0 pt-2">{book.title}</h6>

      <div
        className="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button type="button" className="btn btn-primary">
          Read
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => dispatch(deleteBook(book))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookItem;

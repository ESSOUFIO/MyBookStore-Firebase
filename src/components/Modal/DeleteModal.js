import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../../Store/bookSlice";
import { showHideModal } from "../../Store/uiSlice";

const DeleteModal = () => {
  const { modalDelete } = useSelector((state) => state.ui);
  const { bookSelected } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const deleteHandler = (book) => {
    dispatch(deleteBook(book));
    dispatch(showHideModal("Delete"));
  };
  return (
    <div
      className="DeleteModal"
      style={{ display: modalDelete ? "block" : "none" }}
    >
      <h4>Delete a book</h4>
      <hr />
      <p>Are you sure to delete the book titled: </p>
      <span>
        <b>"{bookSelected && bookSelected.title}" ?</b>
      </span>
      <div className="mt-4 text-end">
        <button
          className="btn btn-danger me-2 "
          onClick={() => deleteHandler(bookSelected)}
        >
          DELETE
        </button>
        <button
          className="btn btn-outline-danger"
          onClick={() => dispatch(showHideModal("Delete"))}
        >
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;

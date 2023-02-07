import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inserBook } from "../../Store/bookSlice";
import { showHideModal } from "../../Store/uiSlice";

const AddForm = () => {
  const titleRef = useRef();
  const priceRef = useRef();
  const authorRef = useRef();
  const descriptionRef = useRef();
  const dispatch = useDispatch();
  const { modalInsert } = useSelector((state) => state.ui);

  const SubmitHandler = (e) => {
    e.preventDefault();
    const ID = Math.floor(Math.random() * 100);
    const newBook = {
      id: ID.toString(),
      title: titleRef.current.value,
      price: priceRef.current.value,
      author: authorRef.current.value,
      description: descriptionRef.current.value,
    };
    dispatch(inserBook(newBook));
    dispatch(showHideModal("Insert"));
    titleRef.current.value = "";
    priceRef.current.value = "";
    authorRef.current.value = "";
    descriptionRef.current.value = "";
  };

  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <div
      className="AddForm px-4 text-white bg-dark"
      style={{ margin: "30px auto", display: modalInsert ? "block" : "none" }}
    >
      <h2 className="mb-3">Insert a book</h2>

      <form onSubmit={SubmitHandler} className="">
        <div className="mb-3 ">
          <div className="mb-3 ">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control bg-dark text-light"
              id="title"
              ref={titleRef}
              autoComplete="off"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="author" className="form-label">
              Author
            </label>
            <input
              type="text"
              className="form-control"
              id="author"
              ref={authorRef}
              autoComplete="off"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              ref={priceRef}
              autoComplete="off"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              ref={descriptionRef}
              autoComplete="off"
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!isLoggedIn}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;

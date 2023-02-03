import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { inserBook } from "../../Store/bookSlice";

const AddForm = () => {
  const titleRef = useRef();
  const priceRef = useRef();
  const authorRef = useRef();
  const descriptionRef = useRef();
  const dispatch = useDispatch();

  const SubmitHandler = (e) => {
    e.preventDefault();
    const newBook = {
      id: Math.floor(Math.random() * 100),
      title: titleRef.current.value,
      price: priceRef.current.value,
      author: authorRef.current.value,
      description: descriptionRef.current.value,
    };
    dispatch(inserBook(newBook));
    titleRef.current.value = "";
    priceRef.current.value = "";
    authorRef.current.value = "";
    descriptionRef.current.value = "";
  };

  return (
    <div className="col-6" style={{ margin: "30px auto" }}>
      <h2 className="mb-3">Insert a book</h2>

      <form onSubmit={SubmitHandler}>
        <div className="mb-3 ">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              ref={titleRef}
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
            />
          </div>

          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="text"
              className="form-control"
              id="price"
              ref={priceRef}
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
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;

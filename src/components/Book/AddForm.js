import React from "react";

const AddForm = () => {
  return (
    <div className="col-6" style={{ margin: "30px auto" }}>
      <h2 className="mb-3">Insert a book</h2>
      <form>
        <div className="mb-3 ">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input type="text" className="form-control" id="title" />
          </div>

          <div className="mb-3">
            <label htmlFor="author" className="form-label">
              Author
            </label>
            <input type="text" className="form-control" id="author" />
          </div>

          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input type="text" className="form-control" id="price" />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
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

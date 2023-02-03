import React from "react";

const BookItem = () => {
  return (
    <div className="list-group-item d-flex justify-content-between">
      <h6 className="m-0 pt-2">An item</h6>

      <div
        class="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button type="button" class="btn btn-primary">
          Read
        </button>
        <button type="button" class="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookItem;

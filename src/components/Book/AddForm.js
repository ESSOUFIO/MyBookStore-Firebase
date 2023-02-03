import React from "react";

const AddForm = () => {
  return (
    <form>
      <div className="mb-3">
        <div class="mb-3">
          <label for="title" class="form-label">
            Title
          </label>
          <input type="text" class="form-control" id="title" />
        </div>

        <div class="mb-3">
          <label for="author" class="form-label">
            Author
          </label>
          <input type="text" class="form-control" id="author" />
        </div>

        <div class="mb-3">
          <label for="price" class="form-label">
            Price
          </label>
          <input type="text" class="form-control" id="Price" />
        </div>

        <div class="mb-3">
          <label for="description" class="form-label">
            Description
          </label>
          <textarea class="form-control" id="description" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddForm;

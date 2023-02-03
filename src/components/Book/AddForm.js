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
          <label for="exampleFormControlTextarea1" class="form-label">
            Example textarea
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddForm;

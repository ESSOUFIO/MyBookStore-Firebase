import React from "react";

const FilterInput = ({ TitleInput }) => {
  const filterHandler = ({ target }) => {
    TitleInput(target.value);
  };
  return (
    <div className="w-100">
      <input
        className="form-control form-control-sm mt-1"
        type="text"
        placeholder="Filter by title..."
        style={{ fontSize: "1rem" }}
        onChange={filterHandler}
      />
    </div>
  );
};

export default FilterInput;

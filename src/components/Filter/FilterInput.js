import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterBooks } from "../../Store/bookSlice";

const FilterInput = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.ui);
  return (
    <div className="w-100">
      <input
        className={`form-control form-control-sm mt-1 bg-${mode}`}
        type="text"
        placeholder="Filter by title..."
        style={{ fontSize: "1rem" }}
        onChange={(e) => dispatch(filterBooks(e.target.value))}
      />
    </div>
  );
};

export default FilterInput;

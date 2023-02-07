import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterBooks } from "../../Store/bookSlice";

const FilterInput = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.ui);
  return (
    <div className="w-100">
      <input
        className={`form-control form-control-sm mt-1`}
        style={{
          background: mode === "light" ? "#F8F9FA" : "#050122",
          fontSize: "1rem",
        }}
        type="text"
        placeholder="Filter by title..."
        onChange={(e) => dispatch(filterBooks(e.target.value))}
      />
    </div>
  );
};

export default FilterInput;

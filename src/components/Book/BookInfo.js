import React from "react";

const BookInfo = () => {
  return (
    <div className="col" style={{ paddingLeft: "25px" }}>
      <h2 className="mb-3">Book info</h2>
      <div className="alert alert-dark" role="alert">
        There is no book selected yet. Please select!
      </div>
    </div>
  );
};

export default BookInfo;

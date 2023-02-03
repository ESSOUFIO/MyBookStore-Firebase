import React from "react";
import { useSelector } from "react-redux";

const BookInfo = () => {
  const { bookSelected } = useSelector((state) => state.books);
  return (
    <div className="col" style={{ paddingLeft: "25px" }}>
      <h2 className="mb-3">Book info</h2>
      {bookSelected ? (
        <ul>
          <li>ID: {bookSelected.id}</li>
          <li>Title: {bookSelected.title}</li>
          <li>Author: {bookSelected.author}</li>
          <li>Price: {bookSelected.price}</li>
          <li>Description: {bookSelected.description}</li>
        </ul>
      ) : (
        <div className="alert alert-dark" role="alert">
          There is no book selected yet. Please select!
        </div>
      )}
    </div>
  );
};

export default BookInfo;

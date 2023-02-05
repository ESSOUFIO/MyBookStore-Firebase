import React from "react";
import { useSelector } from "react-redux";

const BookInfo = () => {
  const { bookSelected } = useSelector((state) => state.books);
  return (
    <div className="col" style={{ paddingLeft: "25px" }}>
      <h2 className="mb-3">Book info</h2>
      {bookSelected ? (
        <ul>
          <li>
            ID: <b>{bookSelected.id}</b>
          </li>
          <li>
            Title: <b>{bookSelected.title}</b>
          </li>
          <li>
            Author: <b>{bookSelected.author}</b>
          </li>
          <li>
            Price: <b>{bookSelected.price}</b>
          </li>
          <li>
            Description: <b>{bookSelected.description}</b>
          </li>
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

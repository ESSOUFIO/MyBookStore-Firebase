import React from "react";
import { useSelector } from "react-redux";

const BookInfo = () => {
  const { bookSelected } = useSelector((state) => state.books);
  const { textMode } = useSelector((state) => state.ui);
  return (
    <div className="col" style={{ paddingLeft: "25px" }}>
      <h2 className={`mb-3 text-${textMode}`}>Book info</h2>
      {bookSelected ? (
        <ul>
          <li className={`my-2 text-${textMode}`}>
            ID: <b>{bookSelected.id}</b>
          </li>
          <li className={`my-2 text-${textMode}`}>
            Title: <b>{bookSelected.title}</b>
          </li>
          <li className={`my-2 text-${textMode}`}>
            Author: <b>{bookSelected.author}</b>
          </li>
          <li className={`my-2 text-${textMode}`}>
            Price: <b>{bookSelected.price}</b>
          </li>
          <li className={`my-2 text-${textMode}`}>
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

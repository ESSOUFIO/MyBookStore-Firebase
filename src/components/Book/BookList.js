import React from "react";
import BookItem from "./BookItem";

const BookList = () => {
  return (
    <div
      className="col"
      style={{ paddingRight: "25px", borderRight: "1px solid lightgray" }}
    >
      <h2 className="mb-3">Booklist</h2>
      <ul className="list-group">
        <BookItem />
        <BookItem />
        <BookItem />
      </ul>
    </div>
  );
};

export default BookList;

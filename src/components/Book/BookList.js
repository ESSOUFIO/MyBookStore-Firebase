import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookItem from "./BookItem";
import { getBooks } from "../../Store/bookSlice";
import FilterInput from "../Filter/FilterInput";

const BookList = ({ readBook }) => {
  const { books, isPending } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const bookListContent =
    books &&
    books.map((book) => (
      <BookItem key={book.id} book={book} readBook={readBook} />
    ));

  return (
    <Fragment>
      <div className="col bookList">
        <div className="d-flex my-2">
          <h2 className="mb-3 me-5">Booklist</h2>
          <FilterInput />
        </div>
        {isPending ? (
          "Pending ... "
        ) : (
          <ul className="list-group">{bookListContent}</ul>
        )}
      </div>
    </Fragment>
  );
};

export default BookList;

import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookItem from "./BookItem";
import { getBooks } from "../../Store/bookSlice";

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
        <h2 className="mb-3">Booklist</h2>
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

import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookItem from "./BookItem";
import { getBooks } from "../../Store/bookSlice";
import FilterInput from "../Filter/FilterInput";

const BookList = ({ readBook }) => {
  const { books, booksFiltred, isPending } = useSelector(
    (state) => state.books
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const bookListContent = (books) => {
    return (
      books &&
      books.map((book) => (
        <BookItem key={book.id} book={book} readBook={readBook} />
      ))
    );
  };

  // Init State
  const [booksList, setBooksList] = useState((prev) => {
    return books && bookListContent(books);
  });

  //Filter Handler
  const TitleInput = (input) => {
    if (input.length) {
      let booksFiltred = books.filter((el) =>
        el.title.toLowerCase().includes(input.toLowerCase())
      );
      setBooksList(bookListContent(booksFiltred));
    } else {
      setBooksList(bookListContent(books));
    }
  };

  return (
    <Fragment>
      <div className="col bookList">
        <div className="d-flex my-2">
          <h2 className="mb-3 me-5">Booklist</h2>
          <FilterInput TitleInput={TitleInput} />
        </div>
        {isPending ? (
          "Pending ... "
        ) : (
          <ul className="list-group">{booksList}</ul>
        )}
      </div>
    </Fragment>
  );
};

export default BookList;

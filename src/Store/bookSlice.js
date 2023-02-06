import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../firebase/firebase";

// export const getBooks = createAsyncThunk(
//   "book/getBooks",
//   async (_, thunkAPI) => {
//     const { rejectWithValue } = thunkAPI;
//     try {
//       const res = await fetch("http://localhost:3005/books");
//       const data = await res.json();
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteBook = createAsyncThunk(
//   "book/deleteBook",
//   async (book, thunkAPI) => {
//     const { rejectWithValue } = thunkAPI;
//     try {
//       await fetch(`http://localhost:3005/books/${book.id}`, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//       });
//       return book;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const inserBook = createAsyncThunk(
//   "book/inserBook",
//   async (newBook, thunkAPI) => {
//     const { rejectWithValue } = thunkAPI;
//     try {
//       const res = await fetch("http://localhost:3005/books", {
//         method: "POST",
//         body: JSON.stringify(newBook),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       const data = await res.json();
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

export const getBooks = createAsyncThunk(
  "book/getBooks",
  async (_, thunkAPI) => {
    // Promise : get data From Firebase
    function getFromFirebase() {
      return new Promise((resolve, reject) => {
        const res = db.collection("books").onSnapshot((snap) => {
          let fitched = snap.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          });
          resolve(fitched);
        });
        return res;
      });
    }

    const { rejectWithValue } = thunkAPI;
    try {
      const data = await getFromFirebase();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const inserBook = createAsyncThunk(
  "book/inserBook",
  async (newBook, thunkAPI) => {
    // Promise : insert data to Firebase
    function insertFirebase() {
      return new Promise((resolve, reject) => {
        const { id, ...rest } = newBook;
        db.collection("books").doc(newBook.id).set(rest);
        resolve(newBook);
      });
    }

    const { rejectWithValue } = thunkAPI;
    try {
      const res = await insertFirebase();
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteBook = createAsyncThunk(
  "book/deleteBook",
  async (book, thunkAPI) => {
    // Promise : insert data to Firebase
    function deleteFirebase() {
      return new Promise((resolve, reject) => {
        db.collection("books").doc(book.id).delete();
        resolve(book);
      });
    }

    const { rejectWithValue } = thunkAPI;
    try {
      await deleteFirebase();
      return book;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const bookSlice = createSlice({
  name: "book",
  initialState: {
    booksAPI: [],
    books: [],
    isPending: false,
    error: null,
    bookSelected: null,
  },
  reducers: {
    selectBook: (state, action) => {
      state.bookSelected = action.payload;
    },

    filterBooks: (state, action) => {
      if (action.payload) {
        state.books = state.booksAPI.filter((el) =>
          el.title.toLowerCase().includes(action.payload.toLowerCase())
        );
      } else {
        state.books = state.booksAPI;
      }
    },
  },
  extraReducers: (builder) => {
    //** ==== GET BOOKS ===== */
    builder.addCase(getBooks.pending, (state, action) => {
      state.isPending = true;
    });

    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.isPending = false;
      state.booksAPI = action.payload;
      state.books = action.payload;
    });

    builder.addCase(getBooks.rejected, (state, action) => {
      state.isPending = false;
      state.error = action.payload;
    });

    //** ==== INSERT A NEW BOOK ===== */
    builder.addCase(inserBook.pending, (state, action) => {
      ///
    });

    builder.addCase(inserBook.fulfilled, (state, action) => {
      state.booksAPI.push(action.payload);
      state.books.push(action.payload);
    });

    builder.addCase(inserBook.rejected, (state, action) => {
      state.error = action.payload;
    });

    //** ==== DELETE A BOOK ===== */
    builder.addCase(deleteBook.pending, (state, action) => {
      ///
    });

    builder.addCase(deleteBook.fulfilled, (state, action) => {
      state.booksAPI = state.booksAPI.filter(
        (el) => el.id !== action.payload.id
      );
      state.books = state.books.filter((el) => el.id !== action.payload.id);
    });

    builder.addCase(deleteBook.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const { selectBook, filterBooks } = bookSlice.actions;
export default bookSlice.reducer;

import "./App.css";
import Header from "./components/Header/Header";
import Container from "./components/Containers/Container";
import BookContainer from "./components/Containers/BookContainer";
import AddForm from "./components/Modal/AddForm";
import BookList from "./components/Book/BookList";
import BookInfo from "./components/Book/BookInfo";
import Modal from "./components/Modal/Modal";
import AddButton from "./components/Buttons/AddButton";
import DeleteModal from "./components/Modal/DeleteModal";
import { useSelector } from "react-redux";

function App() {
  const { mode, textMode } = useSelector((state) => state.ui);
  const { isPending } = useSelector((state) => state.books);

  document.body.style.backgroundColor = mode === "light" ? "white" : "#050122"; //#042743
  return (
    <div
      className="App text-light"
      style={{ cursor: isPending ? "wait" : "default" }}
    >
      <Header />
      <h1 className={`text-center pt-4 mt-5 mb-5 text-${textMode}`}>
        My Book Store
      </h1>
      <AddButton />
      <Container>
        <BookContainer>
          <BookList />
          <BookInfo />
        </BookContainer>
      </Container>
      <Modal>
        <AddForm />
        <DeleteModal />
      </Modal>
    </div>
  );
}

export default App;

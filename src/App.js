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

function App() {
  return (
    <div className="App">
      <Header />
      <h1 className="text-center mt-4 mb-5">My Book Store</h1>
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

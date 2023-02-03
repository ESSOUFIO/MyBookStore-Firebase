import "./App.css";
import Header from "./components/Header/Header";
import Container from "./components/Containers/Container";
import BookContainer from "./components/Containers/BookContainer";
import AddForm from "./components/Book/AddForm";
import BookList from "./components/Book/BookList";
import BookInfo from "./components/Book/BookInfo";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <AddForm />
        <BookContainer>
          <BookList />
          <BookInfo />
        </BookContainer>
      </Container>
    </div>
  );
}

export default App;

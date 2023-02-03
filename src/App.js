import "./App.css";
import Header from "./components/Header/Header";
import Container from "./components/Container";
import AddForm from "./components/Book/AddForm";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <AddForm />
      </Container>
    </div>
  );
}

export default App;

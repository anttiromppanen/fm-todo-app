import Container from "./components/Container";
import FilterButtons from "./components/FilterButtons/FilterButtons";
import Header from "./components/Header/Header";
import TodoSection from "./components/TodoSection/TodoSection";

function App() {
  return (
    <main>
      <Container>
        <Header />
        <TodoSection />
        <FilterButtons />
      </Container>
    </main>
  );
}

export default App;

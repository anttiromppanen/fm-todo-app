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
        <FilterButtons variant="mobile" />
        <h3 className="my-14 text-center text-userLightDarkGrayBlue1 dark:text-userDarkGrayBlue2">
          Drag and drop to reorder list
        </h3>
      </Container>
    </main>
  );
}

export default App;

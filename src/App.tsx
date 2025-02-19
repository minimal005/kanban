import { Raiting } from "./components/Raiting";
import { SearchForm } from "./components/SearchForm";
import { Container } from "./components/Container";
import { TodoList } from "./components/TodoList";
import "./App.css";

export const App = () => {
  return (
    <Container>
      <SearchForm />
      <Raiting />
      <TodoList />
    </Container>
  );
};

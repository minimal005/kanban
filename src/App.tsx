import { Raiting } from "./components/Raiting";
import { SearchForm } from "./components/SearchForm";
import { Container } from "./components/Container";
import { TodoList } from "./components/TodoList";
import { useGithubStore } from "./app/useGithubStore";
import "./App.css";

export const App = () => {
  const { path } = useGithubStore();
  return (
    <Container>
      <SearchForm />
      {path && <Raiting />}
      <TodoList />
    </Container>
  );
};

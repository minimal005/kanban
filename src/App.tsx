import { Raiting } from "./components/Raiting";
import { SearchForm } from "./components/SearchForm";
import { Container } from "./components/Container";
import { TodoList } from "./components/TodoList";
import { useGithubStore } from "./app/useGithubStore";

import "./App.css";

export const App = () => {
  const { error, status } = useGithubStore();

  return (
    <Container>
      <SearchForm />
      {!error && status !== "loading" && <Raiting />}
      <TodoList />
    </Container>
  );
};

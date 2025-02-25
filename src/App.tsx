import { Raiting } from "./components/Raiting";
import { SearchForm } from "./components/SearchForm";
import { Container } from "./components/Container";
import { TodoList } from "./components/TodoList";

import "./App.css";
import { useAppSelector } from "./app/hooks";

export const App = () => {
  const { path, error } = useAppSelector((state) => state.issues);

  console.log(error);
  return (
    <Container>
      <SearchForm />
      {path && !error && <Raiting />}
      <TodoList />
    </Container>
  );
};

import { Raiting } from "./components/Raiting";
import { SearchForm } from "./components/SearchForm";
import { Container } from "./components/Container";
import { TodoList } from "./components/TodoList";
import { useAppSelector } from "./app/hooks";
import "./App.css";

export const App = () => {
  const { open, done, inProgress } = useAppSelector((state) => state.issues);

  return (
    <Container>
      <SearchForm />
      {!!open.length || !!done.length || (!!inProgress.length && <Raiting />)}
      <TodoList />
    </Container>
  );
};

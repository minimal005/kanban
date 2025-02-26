import { Raiting } from "./components/Raiting";
import { SearchForm } from "./components/SearchForm";
import { Container } from "./components/Container";
import { TodoList } from "./components/TodoList";
import { useAppSelector } from "./app/hooks";
import "./App.css";
// import { ColorModeButton } from "./components/ui/color-mode";
import { Flex } from "@chakra-ui/react";
import ColorModeButton from "./components/styleButton";

export const App = () => {
  const { open, done, inProgress } = useAppSelector((state) => state.issues);

  return (
    <Container>
      <Flex justifyContent="flex-end" marginBottom={5}>
        <ColorModeButton />
      </Flex>
      <SearchForm />
      {!!open.length || !!done.length || (!!inProgress.length && <Raiting />)}
      <TodoList />
    </Container>
  );
};

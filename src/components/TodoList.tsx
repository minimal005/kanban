import { Grid } from "@chakra-ui/react";
import { Column } from "./Column";
import { DragDropProvider } from "@dnd-kit/react";
import { move } from "@dnd-kit/helpers";
import { useGithubStore } from "../app/useGithubStore";
import { useEffect, useState } from "react";

export const TodoList = () => {
  const { issues, status, error } = useGithubStore();
  const [tasks, setTasks] = useState(issues);

  const [items, setItems] = useState({
    open: tasks.open,
    inProgress: tasks.inProgress,
    closed: tasks.closed,
  });
  console.log(items);
  console.log(status);
  useEffect(() => {
    setTasks(issues);
  }, [issues]);

  useEffect(() => {
    setItems({
      open: tasks.open,
      inProgress: tasks.inProgress,
      closed: tasks.closed,
    });
  }, [tasks]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <DragDropProvider
      onDragOver={(event) => {
        setItems((items) => move(items, event));
      }}
    >
      <Grid
        as="section"
        templateColumns="repeat(3, minmax(250px, 1fr))"
        gap={4}
        w="100%"
      >
        {Object.entries(items).map(([column, items]) => (
          <Column key={column} id={column} issues={items} />
        ))}
      </Grid>
    </DragDropProvider>
  );
};

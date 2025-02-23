import { useEffect, useState } from "react";
import { DragDropProvider } from "@dnd-kit/react";
import { Grid } from "@chakra-ui/react";
import { Column } from "./Column";
import { move } from "@dnd-kit/helpers";
import { useGithubStore } from "../app/useGithubStore";
import { IssuesGrouped } from "@/utils/types/Issue";

export const TodoList = () => {
  const { issues, status, error } = useGithubStore();

  const [items, setItems] = useState<IssuesGrouped>(issues);

  useEffect(() => {
    setItems(issues);
  }, [issues]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <DragDropProvider
      onDragOver={(event) => {
        setItems((prev) => {
          const result = move(prev, event);

          return {
            toDo: result["toDo"] || [],
            inProgress: result["inProgress"] || [],
            done: result["done"] || [],
          };
        });
      }}
    >
      <Grid
        as="section"
        templateColumns={{
          sm: "1fr",
          md: "repeat(3, minmax(250px, 1fr))",
        }}
        justifyContent={"center"}
        gap={4}
        w="100%"
      >
        {Object.entries(items).map(([column, issues]) => (
          <Column key={column} id={column} issues={issues} />
        ))}
      </Grid>
    </DragDropProvider>
  );
};

import { useEffect, useMemo, useState } from "react";
import { DragDropProvider } from "@dnd-kit/react";
import { Grid, Text } from "@chakra-ui/react";
import { Column } from "./Column";
import { move } from "@dnd-kit/helpers";
import { IssuesGrouped } from "@/types/Issue";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { InitialState, setIssues } from "@/features/issuesSlice";
import { Card } from "./Card";

export const TodoList = () => {
  const issues = useAppSelector((state: { issues: InitialState }) => ({
    open: state.issues.open,
    inProgress: state.issues.inProgress,
    done: state.issues.done,
  }));
  const dispatch = useAppDispatch();

  const memoizedIssues = useMemo(
    () => ({
      open: issues.open,
      inProgress: issues.inProgress,
      done: issues.done,
    }),
    [issues.open, issues.inProgress, issues.done]
  );

  const [items, setItems] = useState<IssuesGrouped>(memoizedIssues);

  useEffect(() => {
    setItems(memoizedIssues);
  }, [memoizedIssues]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <DragDropProvider
      onDragOver={(event) => {
        setItems((items) => {
          return move(items, event);
        });
      }}
      onDragEnd={() => {
        dispatch(setIssues(items));
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
          <Column key={column} id={column}>
            {issues.length > 0 ? (
              issues.map((issue, index) => (
                <Card
                  key={issue.id}
                  id={issue.id}
                  index={index}
                  issue={issue}
                  column={column}
                />
              ))
            ) : (
              <Text textAlign="center">No issues</Text>
            )}
          </Column>
        ))}
      </Grid>
    </DragDropProvider>
  );
};

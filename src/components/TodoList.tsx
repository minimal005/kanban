import { Grid } from "@chakra-ui/react";
import { Column } from "./Column";
import { Issue } from "@/utils/types/Issue";

const issues: Issue[] = [
  {
    id: 12,
    title: "How can I create my own link",
    date: "Fri Dec 13 2024 ",
    status: "open",
    author: "Lonelybhadboi",
    comments: 0,
  },
  {
    id: 10,
    title: "Termux camdumper",
    date: "Tue Feb 27 2024",
    status: "open",
    author: "Salik00790",
    comments: 1,
  },
  {
    id: 9,
    title: "Hack Cam",
    date: "Wed Oct 11 2023",
    status: "open",
    author: "S0say",
    comments: 0,
  },
  {
    id: 7,
    title: "Link not generating",
    date: "Jan 27 2023",
    status: "open",
    author: "Baka-U",
    comments: 1,
  },
];

export const TodoList = () => {
  return (
    <Grid as="section" templateColumns="repeat(3, 1fr)" gap={4}>
      <Column title="Open" issues={issues.filter((i) => i.status === "open")} />
      <Column
        title="InProgress"
        issues={issues.filter((i) => i.status === "inProgress")}
      />
      <Column
        title="Closed"
        issues={issues.filter((i) => i.status === "closed")}
      />
    </Grid>
  );
};

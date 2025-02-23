export interface Issue {
  id: number;
  title: string;
  date: string;
  state: "toDo" | "inProgress" | "done";
  author: string;
  comments: number;
  assignee?: string | null;
}

export interface IssuesGrouped {
  toDo: Issue[];
  inProgress: Issue[];
  done: Issue[];
  [key: string]: Issue[];
}

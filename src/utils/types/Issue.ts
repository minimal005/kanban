export interface Issue {
  id: number;
  title: string;
  date: string;
  state: "open" | "inProgress" | "closed";
  author: string;
  comments: number;
  assignee?: string | null;
}

export interface IssuesGrouped {
  open: Issue[];
  inProgress: Issue[];
  closed: Issue[];
  [key: string]: Issue[];
}

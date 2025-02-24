// export interface Issue {
//   id: number;
//   title: string;
//   date: string;
//   state: "toDo" | "inProgress" | "done";
//   author: string;
//   comments: number;
//   assignee?: string | null;
// }

// export interface IssuesGrouped {
//   toDo: Issue[];
//   inProgress: Issue[];
//   done: Issue[];
//   [key: string]: Issue[];
// }

export interface Issue {
  id: number;
  title: string;
  html_url: string;
  state: string;
  author: string;
  date: string;
  comments: number;
  assignee: string | null;
}

export type IssuesGrouped = {
  open: Issue[];
  inProgress: Issue[];
  done: Issue[];
};

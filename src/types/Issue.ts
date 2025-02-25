export interface Issue {
  id: number;
  title: string;
  html_url: string;
  state: string;
  user: { login: string };

  created_at: string;
  comments: number;
  assignee: string | null;
}

export type IssuesGrouped = {
  open: Issue[];
  inProgress: Issue[];
  done: Issue[];
};

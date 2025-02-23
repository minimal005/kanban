export interface GithubIssue {
  id: number;
  title: string;
  created_at: string;
  state: "toDo" | "done";
  user: { login: string };
  comments: number;
  labels: { name: string }[];
  assignee?: { login: string } | null;
}

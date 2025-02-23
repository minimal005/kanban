export interface GithubIssue {
  id: number;
  title: string;
  created_at: string;
  state: "open" | "closed";
  user: { login: string };
  comments: number;
  labels: { name: string }[];
  assignee?: { login: string } | null;
}

export interface Issue {
  id: number;
  title: string;
  date: string;
  state: "open" | "inProgress" | "closed";
  author: string;
  comments: number;
  assignee?: string | null;
}

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

export interface IssuesGrouped {
  open: Issue[];
  inProgress: Issue[];
  closed: Issue[];
}

export interface GithubStore {
  issues: IssuesGrouped;
  status: "idle" | "loading" | "error";
  error: string | null;
  path: string;
  fetchIssues: (repo: string) => Promise<void>;
  stars: number;
}

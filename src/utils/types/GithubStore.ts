import { IssuesGrouped } from "./Issue";

export interface GithubStore {
  issues: IssuesGrouped;
  status: "idle" | "loading" | "error";
  error: string | null;
  path: string;
  fetchIssues: (repo: string) => Promise<void>;
  stars: number;
}

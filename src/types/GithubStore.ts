import { IssuesGrouped } from "./Issue";
import { Status } from "./StatusEnum";

export interface GithubStore {
  issues: IssuesGrouped;
  status: Status;
  error: string | null;
  path: string;
  fetchIssues: (repo: string) => Promise<void>;
  stars: number;
}

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import axios from "axios";
import { GithubIssue, GithubStore, IssuesGrouped } from "@/utils/types/Issue";

const GITHUB_API_URL = "https://api.github.com";
const TOKEN = import.meta.env.VITE_GITHUB_TOKEN || ""; // Додаємо токен, якщо він є

export const useGithubStore = create<
  GithubStore & {
    stars: number;
    fetchRepoDetails: (repo: string) => Promise<void>;
  }
>()(
  persist(
    (set) => ({
      issues: { open: [], inProgress: [], closed: [] },
      path: "",
      status: "idle",
      error: null,
      stars: 0, // Додаємо поле для зірочок

      fetchIssues: async (repo: string) => {
        set({ status: "loading", error: null });
        try {
          const response = await axios.get<GithubIssue[]>(
            `${GITHUB_API_URL}/repos/${repo}/issues?state=all&per_page=100`,
            TOKEN ? { headers: { Authorization: `Bearer ${TOKEN}` } } : {}
          );

          const groupedIssues: IssuesGrouped = {
            open: [],
            inProgress: [],
            closed: [],
          };

          response.data.forEach((issue) => {
            const state =
              issue.state === "closed"
                ? "closed"
                : issue.assignee
                ? "inProgress"
                : "open";

            groupedIssues[state].push({
              id: issue.id,
              title: issue.title,
              date: issue.created_at,
              state,
              author: issue.user.login,
              comments: issue.comments,
              assignee: issue.assignee?.login || null,
            });
          });

          set({ issues: groupedIssues, status: "idle", path: repo });
        } catch (error) {
          console.error("Error fetching issues:", error);
          set({ status: "error", error: "Failed to fetch issues" });
        }
      },

      fetchRepoDetails: async (repo: string) => {
        try {
          const response = await axios.get<{ stargazers_count: number }>(
            `${GITHUB_API_URL}/repos/${repo}`,
            TOKEN ? { headers: { Authorization: `Bearer ${TOKEN}` } } : {}
          );
          set({ stars: response.data.stargazers_count });
        } catch (error) {
          console.error("Error fetching repo details:", error);
        }
      },
    }),
    {
      name: "github-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

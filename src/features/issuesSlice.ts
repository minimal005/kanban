import { Issue, IssuesGrouped } from "@/types/Issue";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const GITHUB_API_URL = "https://api.github.com/repos/";

export const fetchIssues = createAsyncThunk(
  "issues/fetchIssues",
  async (repo: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${GITHUB_API_URL}${repo}/issues`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data || "Error fetching issues");
      }
      return rejectWithValue("Unknown error occurred");
    }
  }
);
export interface InitialState extends IssuesGrouped {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: InitialState = {
  open: [],
  inProgress: [],
  done: [],
  status: "idle",
  error: null,
};

const issuesSlice = createSlice({
  name: "issues",
  initialState,
  reducers: {
    moveIssue: (
      state,
      action: PayloadAction<{
        issueId: number;
        from: keyof typeof state;
        to: keyof typeof state;
      }>
    ) => {
      const { issueId, from, to } = action.payload;

      if (!Array.isArray(state[from]) || !Array.isArray(state[to])) {
        return;
      }

      const issueIndex = state[from].findIndex((issue) => issue.id === issueId);
      if (issueIndex !== -1) {
        const [movedIssue] = state[from].splice(issueIndex, 1);
        state[to].push(movedIssue);
      }
      console.log(state[from], state[to]);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIssues.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchIssues.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.open = action.payload.filter(
          (issue: Issue) => !issue.assignee && issue.state === "open"
        );
        state.inProgress = action.payload.filter(
          (issue: Issue) => issue.assignee && issue.state === "open"
        );
        state.done = action.payload.filter(
          (issue: Issue) => issue.state === "closed"
        );
      })
      .addCase(fetchIssues.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          typeof action.payload === "string" ? action.payload : "Unknown error";
      });
  },
});

export const { moveIssue } = issuesSlice.actions;
export default issuesSlice;

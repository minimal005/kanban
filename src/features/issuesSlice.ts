import axios from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GITHUB_API_URL } from "@/utils/constants";
import { Issue, IssuesGrouped } from "@/types/Issue";
import { Status } from "@/types/StatusEnum";

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

export const fetchRepoDetails = createAsyncThunk(
  "issues/fetchRepoDetails",
  async (repo: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${GITHUB_API_URL}${repo}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data || "Error fetching repo details"
        );
      }
      return rejectWithValue("Unknown error occurred");
    }
  }
);

export interface InitialState extends IssuesGrouped {
  status: Status;
  error: string | null;
  stars: number;
  path: string;
}

const initialState: InitialState = {
  open: [],
  inProgress: [],
  done: [],
  status: Status.Idle,
  error: null,
  stars: 0,
  path: "",
};

const issuesSlice = createSlice({
  name: "issues",
  initialState,
  reducers: {
    setIssues: (state, action: PayloadAction<IssuesGrouped>) => {
      state.open = action.payload.open;
      state.inProgress = action.payload.inProgress;
      state.done = action.payload.done;
    },
    setPath: (state, action: PayloadAction<string>) => {
      state.path = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIssues.pending, (state) => {
        state.status = Status.Loading;
        state.error = null;
      })
      .addCase(fetchIssues.fulfilled, (state, action) => {
        state.status = Status.Succeeded;
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
        state.status = Status.Failed;
        state.error =
          typeof action.payload === "string" ? action.payload : "Unknown error";
        state.open = [];
        state.inProgress = [];
        state.done = [];
      })
      .addCase(fetchRepoDetails.fulfilled, (state, action) => {
        state.stars = action.payload.stargazers_count;
      });
  },
});

export const { setIssues, setPath } = issuesSlice.actions;
export default issuesSlice;

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import issuesSlice from "../features/issuesSlice";

const persistConfig = {
  key: "issues",
  storage,
  whitelist: ["open", "inProgress", "done", "path", "stars"],
};

const persistedIssuesReducer = persistReducer(
  persistConfig,
  issuesSlice.reducer
);

export const store = configureStore({
  reducer: {
    issues: persistedIssuesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

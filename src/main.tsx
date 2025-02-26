import React from "react";
import ReactDOM from "react-dom/client";
import { persistor, store } from "./app/store.ts";
import { Provider } from "./components/ui/provider.tsx";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { App } from "./App.tsx";
import { ThemeProvider } from "next-themes";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <Provider>
            <App />
          </Provider>
        </ThemeProvider>
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { Provider } from "./components/ui/provider.tsx";
import { Provider as ReduxProvider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import { ThemeProvider } from "next-themes";
import { persistor, store } from "./app/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Provider>
          <ThemeProvider attribute="class" disableTransitionOnChange>
            <App />
          </ThemeProvider>
        </Provider>
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { Provider } from "./components/ui/provider.tsx";

import "./index.css";
import { ThemeProvider } from "next-themes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Home from "./pages/Home";
import "./styles/global.scss";
import { PlacesContextProvider } from "./context/PlacesContext";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <PlacesContextProvider>
        <Home />
      </PlacesContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

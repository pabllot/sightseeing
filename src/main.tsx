import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { PlacesContextProvider } from "./context/PlacesContext";
import AppRoutes from "./AppRoutes";
import "./styles/global.scss";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <PlacesContextProvider>
        <AppRoutes />
      </PlacesContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

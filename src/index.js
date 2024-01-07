import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";

const REACT_QUERY_CLIENT = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={REACT_QUERY_CLIENT}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@1_app/index.css";
import App from "@1_app/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import DateCounter from "./DateCounter";
import FlashCards from "./FlashCards";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <FlashCards />
  </StrictMode>
);

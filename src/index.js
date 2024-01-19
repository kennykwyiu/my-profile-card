import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import DateCounter from "./DateCounter";
import FlashCards from "./FlashCards";
import DateCounterUpgraged from "./DateCounterUpgraded";
import AccordianComponent from "./AccordianComponent";
import TipCalculator from "./TipCalculator";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <TipCalculator />
  </StrictMode>
);

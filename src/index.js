import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import DateCounter from "./DateCounter";
import FlashCards from "./FlashCards";
import DateCounterUpgraged from "./DateCounterUpgraded";
import AccordianComponent from "./AccordianComponent";
import TipCalculator from "./TipCalculator";
import TipCalculatorOutput from "./TipCalculator";
import TextExpanderApp from "./TextExpanderApp";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <TextExpanderApp />
  </StrictMode>
);

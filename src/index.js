import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App";
import DateCounter from "./DateCounter";
import FlashCards from "./FlashCards";
import DateCounterUpgraged from "./DateCounterUpgraded";
import AccordianComponent from "./AccordianComponent";
import TipCalculator from "./TipCalculator";
import TipCalculatorOutput from "./TipCalculator";
import TextExpanderApp from "./TextExpanderApp";
import CurrencyConvertor from "./CurrencyConvertor";
import Geolocation from "./Geolocation";
import Sec12CurrencyConverter from "./Sec12CurrencyConverter";
import BankAccountCreation from "./BankAccountCreation";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    {/* <TextExpanderApp /> */}
    {/* <CurrencyConvertor /> */}
    {/* <Geolocation /> */}
    {/* <Sec12CurrencyConverter /> */}
    <BankAccountCreation />
  </StrictMode>
);

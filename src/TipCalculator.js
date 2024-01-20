import { useState } from "react";
import "./TipCalculator.css";

export default function TipCalculatorOutput() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [billAmount, setBillAmount] = useState("");
  return (
    <div>
      <BillInsertor billAmount={billAmount} onSetBillAmount={setBillAmount} />
      <TipInsertor>How did you like the service?</TipInsertor>
      <TipInsertor>How did your friend like the service?</TipInsertor>
      <Output billAmount={billAmount} />
      <Reset />
    </div>
  );
}

function BillInsertor({ billAmount, onSetBillAmount }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={billAmount}
        onChange={(e) => onSetBillAmount(Number(e.target.value))}
      />
    </div>
  );
}

function TipInsertor({ children }) {
  return (
    <div>
      <label>{children}</label>
      <select>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absoluely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ billAmount }) {
  return <h3>You pay X (${billAmount} + $B tip)</h3>;
}

function Reset() {
  return <button>Reset</button>;
}

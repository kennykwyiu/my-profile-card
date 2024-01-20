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
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = (billAmount * (percentage1 + percentage2)) / 2 / 100;

  function handleReset() {
    setBillAmount("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInsertor billAmount={billAmount} onSetBillAmount={setBillAmount} />
      <TipInsertor percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service?
      </TipInsertor>
      <TipInsertor percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service?
      </TipInsertor>
      {billAmount > 0 && (
        <>
          <Output billAmount={billAmount} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
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

function TipInsertor({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absoluely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ billAmount, tip }) {
  return (
    <h3>
      You pay {billAmount + tip} (${billAmount} + ${tip} tip)
    </h3>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}> Reset</button>;
}

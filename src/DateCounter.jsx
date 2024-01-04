import { useState } from "react";

export default function DateCounter() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  return (
    <>
      <div
        style={{
          fontFamily: "sans-serif",
          textAlign: "center",
          fontSize: "24px",
          padding: "20px",
        }}
      >
        <button
          style={{ fontSize: "24px", padding: "10px" }}
          onClick={() => setStep((c) => c - 1)}
        >
          -
        </button>
        <span>Step: {step}</span>
        <button
          style={{ fontSize: "24px", padding: "10px" }}
          onClick={() => setStep((c) => c + 1)}
        >
          +
        </button>
      </div>
      <div
        style={{
          fontFamily: "sans-serif",
          textAlign: "center",
          fontSize: "24px",
          padding: "20px",
        }}
      >
        <button
          style={{ fontSize: "24px", padding: "10px" }}
          onClick={() => setCount((c) => c - step)}
        >
          -
        </button>
        <span>Count: {count}</span>
        <button
          style={{ fontSize: "24px", padding: "10px" }}
          onClick={() => setCount((c) => c + step)}
        >
          +
        </button>
      </div>

      <p
        style={{
          fontFamily: "sans-serif",
          textAlign: "center",
          fontSize: "24px",
          padding: "20px",
        }}
      >
        30 days from today is Wed Jan 21 2024
      </p>
    </>
  );
}

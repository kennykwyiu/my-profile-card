import { useState } from "react";

export default function DateCounterUpgraged() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("Jan 5 2024");
  console.log(date);
  date.setDate(date.getDate() + count);

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
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
}

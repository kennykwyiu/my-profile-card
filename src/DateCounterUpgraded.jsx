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
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />

        <span>Step: {step}</span>
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
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
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

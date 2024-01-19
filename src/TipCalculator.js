import { useState } from "react";

export default function TipCalculator() {
  const [billAmount, setBillAmount] = useState(0);
  return (
    <div>
      <BillInsertor onInput={setBillAmount} />
      <TipInsertor people={"you"} />
      <TipInsertor people={"your friend"} />
    </div>
  );
}

function BillInsertor({ onInput }) {
  return (
    <>
      <p>How much was the bill? {<input>{onInput()}</input>}</p>
    </>
  );
}

function TipInsertor({ people }) {
  return (
    <>
      <p>
        How did {people} like the service? {<input></input>}
      </p>
    </>
  );
}

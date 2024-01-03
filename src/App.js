import { useState } from "react";
import "./App.css";

export default function App() {
  return <Counter />;
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("Jan 3 2024");
  date.setDate(date.getDate() + count);

  return (
    <div className="container">
      <div className="mainBox">
        <div className="subBox">
          <button className="decreaseBtn" onClick={() => setStep((s) => s - 1)}>
            {" "}
            -{" "}
          </button>
          <p>Step : {step}</p>
          <button className="increaseBtn" onClick={() => setStep((s) => s + 1)}>
            {" "}
            +{" "}
          </button>
        </div>
        <div className="subBox">
          <button
            className="decreaseBtn"
            onClick={() => setCount((c) => c - step)}
          >
            {" "}
            -{" "}
          </button>
          <p>Count : {count}</p>
          <button
            className="increaseBtn"
            onClick={() => setCount((c) => c + step)}
          >
            {" "}
            +{" "}
          </button>
        </div>
        <div className="text">
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from now is `
              : `${count} days ago was`}
          </span>
          <span> is {date.toDateString()}</span>
        </div>
      </div>
    </div>
  );
}

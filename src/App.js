import { useState } from "react";
import "./App.css";

//date counter
export default function App() {
  return (
    <div className="container">
      <div className="heading">
        <h1>Date Counter</h1>
      </div>
      <div className="row">
        <div className="col leftCol">
          <Counter />
        </div>
        <div className="col rightCol">
          <RightCounter />
        </div>
      </div>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("Jan 3 2024");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div className="mainBox">
        <div className="heading">
          <h2>Date Counter 1</h2>
        </div>
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

function RightCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("Jan 3 2024");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div className="mainBox">
        <div className="heading">
          <h2>Date Counter 2</h2>
        </div>
        <div className="subBox rightSubBox">
          <input
            type="range"
            min="1"
            max="10"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          ></input>
          <p>Step : {step}</p>
        </div>
        <div className="subBox">
          <button
            className="decreaseBtn"
            onClick={() => setCount((c) => c - step)}
          >
            {" "}
            -{" "}
          </button>
          <p>
            Count :{" "}
            <input
              type="text"
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
            ></input>
          </p>
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

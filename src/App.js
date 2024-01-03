import { useState } from "react";
import "./App.css";

export default function App() {
  return <Counter />;
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="mainBox">
        <div className="subBox">
          <button
            className="decreaseBtn"
            onClick={() => setCount((c) => c - 1)}
          >
            {" "}
            -{" "}
          </button>
          <p>Count : {count}</p>
          <button
            className="increaseBtn"
            onClick={() => setCount((c) => c + 1)}
          >
            {" "}
            +{" "}
          </button>
        </div>
        <div className="text">
          <p>Today is date</p>
        </div>
      </div>
    </div>
  );
}

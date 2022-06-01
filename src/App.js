import React, { useState } from "react";
import "./style.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [subcounter, setSubcounter] = useState(10);

  function increment() {
    setCounter(counter + 1)
  }

  function decrease() {
    setSubcounter(subcounter - 1)
  }

  return (
    <div className="container">
      <div className="add">
      <h3>{counter}</h3>
      <button onClick={increment}> Increment </button>
      </div>
      <div className="less">
      <h3>{subcounter}</h3>
      <button onClick={decrease}> Decrease </button>
      </div>
    </div>
  );
}

export default App;

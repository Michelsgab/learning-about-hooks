import React, { useState } from "react";
import "./style.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [subcounter, setSubcounter] = useState(10);
  const [inputValue, setInputValue] = useState("");

  function increment() {
    setCounter(counter + 1);
  }

  function decrease() {
    setSubcounter(subcounter - 1);
  }

  function changeText(e) {
    const newValue = e.target.value;
    setInputValue(newValue);
  }

  return (
    <div className="container">
      <div className="container-item">
        <h3>{counter}</h3>
        <button onClick={increment}> Increment </button>
      </div>
      <div className="container-item">
        <h3>{subcounter}</h3>
        <button onClick={decrease}> Decrease </button>
      </div>
      <div className="container-input">
        <input placeholder="enter something..." onChange={changeText} />
        {inputValue}
      </div>
    </div>
  );
}

export default App;

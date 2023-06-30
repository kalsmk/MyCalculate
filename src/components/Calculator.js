import React, { useState } from "react";

function Calculator() {
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (!/[^0-9+\-*/%.]/g.test(value)) {
      setResult(result + value);
    }
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const pertangeCalc = () => {
    if (result === "") {
      setResult(0);
    } else {
      let calc = parseFloat(result, 10) / 100;
      setResult(calc + "");
    }
  };

  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    console.log(result, "result", result.length, typeof result);
    setResult(result.slice(0, -1));
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <input
            type="text"
            value={result}
            onChange={(e) => handleButtonClick(e.key)}
          />
        </div>
        <div className="button-container">
          <button className="operator" onClick={() => clear()}>
            Clear
          </button>
          <button className="operator" onClick={backspace}>
            Backspace
          </button>
          <button className="operator" onClick={() => pertangeCalc("%")}>
            %
          </button>
          <button className="operator" onClick={() => handleButtonClick("+")}>
            +
          </button>

          <button
            className="numberButtons"
            onClick={() => handleButtonClick("7")}
          >
            7
          </button>
          <button
            className="numberButtons"
            onClick={() => handleButtonClick("8")}
          >
            8
          </button>
          <button
            className="numberButtons"
            onClick={() => handleButtonClick("9")}
          >
            9
          </button>
          <button className="operator" onClick={() => handleButtonClick("*")}>
            *
          </button>

          <button
            className="numberButtons"
            onClick={() => handleButtonClick("4")}
          >
            4
          </button>
          <button
            className="numberButtons"
            onClick={() => handleButtonClick("5")}
          >
            5
          </button>
          <button
            className="numberButtons"
            onClick={() => handleButtonClick("6")}
          >
            6
          </button>
          <button className="operator" onClick={() => handleButtonClick("-")}>
            -
          </button>

          <button
            className="numberButtons"
            onClick={() => handleButtonClick("1")}
          >
            1
          </button>
          <button
            className="numberButtons"
            onClick={() => handleButtonClick("2")}
          >
            2
          </button>
          <button
            className="numberButtons"
            onClick={() => handleButtonClick("3")}
          >
            3
          </button>
          <button className="operator" onClick={() => handleButtonClick("/")}>
            /
          </button>
        </div>
        <div className="lastRowButtons">
          <button
            className="zero numberButtons"
            onClick={() => handleButtonClick("0")}
          >
            0
          </button>
          <button
            className="numberButtons"
            onClick={() => handleButtonClick(".")}
          >
            .
          </button>
          <button className="submitButton" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;

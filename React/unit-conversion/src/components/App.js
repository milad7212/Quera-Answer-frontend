import React, { useState } from "react";
import Select from "./Select";
import Input from "./Input";
import { units } from "../units";

function App() {
  const [result, setResult] = useState(0);
  const [amountInput, setAmountInput] = useState(0);
  const [fromInput, setFromInput] = useState(1);
  const [toInput, setToInput] = useState(1);

  const handelConvert = () => {
    const answer = (amountInput * fromInput) / toInput;
    setResult(answer);
  };
  return (
    <>
      <div className="converter-form">
        {/* Input with label "Amount" here */}
        <Input
          label="Amount"
          onChange={(event) => {
            setAmountInput(event.target.value);
          }}
        />
        <div className="row">
          {/* Selects with labels "From" and "To" here */}
          <Select
            label="From"
            items={units}
            onChange={(val) => setFromInput(val.target.value)}
          />
          <Select
            label="To"
            items={units}
            onChange={(val) => setToInput(val.target.value)}
          />
          <button onClick={handelConvert}>Convert</button>
        </div>
      </div>

      <div id="result">
        Result is: <span data-testid="result">{result}</span>
      </div>
    </>
  );
}

export default App;

import React, { useState } from "react";
import Input from "./Input";
import cites from "./cities.json";

function App() {
  console.log(cites);
  const [hintInput, setHintInput] = useState("");

  const handelInput = (value) => {
    if (!value) {
      setHintInput("");
    } else {
      const answre = cites.find((element) => element.startsWith(value));
      setHintInput(answre ? answre : "");
    }
  };
  return (
    <div>
      <Input
        handleChange={(val) => handelInput(val.target.value)}
        hint={hintInput}
      />
    </div>
  );
}

export default App;

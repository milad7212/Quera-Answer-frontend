import React, { useEffect, useState } from "react";
import Congrats from "../components/Congrats";
import GuessedWords from "../components/GuessedWords";
import Input from "./Input";

const App = () => {
  const [success, setSuccess] = useState(false);
  const [secretWord, setSecretWord] = useState("");
  const [guesseWords, setGuesseWords] = useState([]);
  useEffect(() => {
    setSecretWord("Letter");
  }, []);

  function getLetterMatchCount(guessedWord, secretWord) {
    return 0;
  }

  const guessWord = (guessedWord) => {
    //...
  };

  return (
    <div className={"container"}>
      <h2 className={"mt-2"}>Guess the word!</h2>
      <Congrats success={false} />
      <Input />
      <GuessedWords guessedWords={[]} />
    </div>
  );
};

export default App;

import React, {Component} from 'react';
import Congrats from "../components/Congrats";
import GuessedWords from "../components/GuessedWords";
import Input from "../containers/Input";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            success: false,
            secretWord: "",
            guessedWords: []
        }
    }

    getLetterMatchCount(guessedWord, secretWord) {
        return 0
    };

    componentDidMount() {
        this.setSecretWord("Letter");
    };

    setSecretWord = (secretWord) => {
        //...
    };

    guessWord = (guessedWord) => {
        //...
    };


    render() {
        return (
           <div className={"container"}>
               <h2 className={"mt-2"}>Guess the word!</h2>
               <Congrats success={false}/>
               <Input/>
               <GuessedWords guessedWords={[]}/>
           </div>
        );
    }
}

export default App;

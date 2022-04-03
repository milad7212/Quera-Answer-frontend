import React from "react";

const GuessedWords = (props) => {
    let contents;
    if (props.guessedWords.length === 0) {
        //...
    } else {
        let guessedWordsRow;
        contents = (
            <div id={"guessed-words"}>
                <h3>Guessed Words</h3>
                <table className={"table table-sm"}>
                    <thead className={"thead-light"}>
                    <tr>
                        <th>
                            Guess
                        </th>
                        <th>
                            Matching Letters
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {guessedWordsRow}
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <div id={"component-guessed-words"}>
            {contents}
        </div>
    )
};

export default GuessedWords;
import React, {Component, Fragment} from "react";


class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            guessWord: ""
        }
    }

    onSubmitGuessedWord = (e) => {
        return null;
    };

    render() {
        let contents = this.props.success
            ? null
            : (
                <Fragment>
                    <input id={"word-guess"}
                            placeholder={"enter guess"}
                            className={"mb-2 mx-sm-3"}/>
                    <button className={"btn btn-primary mb-2"}
                            id={"guess-word-button"}
                        >
                        Submit
                    </button>
                </Fragment>
            );
        return (
            <div>
                {contents}
            </div>
        )
    }
};

export default Input;
import React from 'react';


export default class TodoItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="todo-item">
                <p>
                    <span className="name">
                    </span>

                    <span className="priority" style={{marginLeft: 6}}>
                    </span>

                    <span className="status" style={{marginLeft: 6}}>
                    </span>
                </p>
            </div>
        )
    }
}

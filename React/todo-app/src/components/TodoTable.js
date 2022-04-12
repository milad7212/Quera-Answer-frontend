import React from 'react';
import v4 from 'uuid';

import TodoList from './TodoList';
import AddTodo from './AddTodo';
import FilterTodo from './FilterTodo';


export default class TodoTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            undoneOnly: false,
            todoList: []
        };

        this.toggleDone = this.toggleDone.bind(this);
        this.toggleFilter = this.toggleFilter.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    toggleFilter() {
        this.setState(prevState => ({
            undoneOnly: !prevState.undoneOnly
        }));
    }

    toggleDone(id) {
        // ...
    }

    addTodo(name, priority) {
        // ...
    }

    render() {
        return (
            <div className='todo-table'>
                <AddTodo addTodo={this.addTodo}/>
                <FilterTodo undoneOnly={this.state.undoneOnly} toggleFilter={this.toggleFilter}/>
                <TodoList todoList={this.state.todoList} toggleDone={this.toggleDone}
                          undoneOnly={this.state.undoneOnly}/>
            </div>
        )
    }
}

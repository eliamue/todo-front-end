import React, { Component } from 'react'
import { addTodo, completeTodo, getTodoList } from './fetch-utils'

export default class Todos extends Component {
    state = {
        todos: [],
        todo: ''
    }

    fetchIt = async () => {
        const todos = await getTodoList(this.props.token);
        this.setState({ todos: todos })
    }

    componentDidMount = async () => {
        await this.fetchIt()
    }

    handleSubmit = async e => {
        e.preventDefault();
        await addTodo(this.state.todo, this.props.token);
        await this.fetchIt()
        
        
    }

    handleTodoChange = e => {
        this.setState({ todo: e.target.value })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Todo: 
                        <input onChange={this.handleTodoChange}/>
                    </label>
                    <button>Add Todo</button>
                </form>
                <div>
                    { 
                    this.state.todos.map(todo =>
                    <p
                    className={todo.completed ? 'completed' : 'not-completed'}
                    key={`${todo.todo}${todo.id}`}
                    onClick={async () => 
                        {
                        await completeTodo(todo.id, this.props.token)
                        await this.fetchIt()
                        }
                    }
                    >
                        {todo.todo}
                    </p>
        )
            }
                </div>
            </div>
        )
    }
}

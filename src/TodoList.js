import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {todos: []};
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.toggleComplete = this.toggleComplete.bind(this);
    }

    addTodo(newTodo){
        this.setState(
            {todos: [...this.state.todos, newTodo]}
        )
    }

    updateTodo(id, updatedDesc){
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){ 
                return {...todo, desc: updatedDesc};
            }
            return todo;
        });
        this.setState({todos: updatedTodos})
    }

    toggleComplete(id){
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){ 
                return {...todo, isComplete: !todo.isComplete};
            }
            return todo;
        });
        this.setState({todos: updatedTodos})
    }

    removeTodo(id){
        this.setState({
            todos: this.state.todos.filter(t => t.id !== id)
        });
    }

    render() {
        let display = this.state.todos.map((todo) => 
            (<Todo 
                key={todo.id} 
                id={todo.id} 
                desc={todo.desc} 
                isComplete={todo.isComplete}
                removeTodo={this.removeTodo}
                updateTodo={this.updateTodo}
                toggleTodo={this.toggleComplete}
                
            />)
            )

        return (
            <div>
                <h1>Todo List!</h1>
                <h3>A Simple React Todo List App</h3>
                <div>{display}</div>
                <NewTodoForm addTodo={this.addTodo}/>
            </div>
        );
    }
}

export default TodoList;

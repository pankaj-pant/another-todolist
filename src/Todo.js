import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {isEditing: false, desc: this.props.desc, isComplete: false};
        this.handleRemove = this.handleRemove.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleRemove(){
        this.props.removeTodo(this.props.id);
    }

    handleEdit(){
        this.setState({isEditing: true});
    }

    handleSave(){
        this.setState({isEditing: false});
        this.props.updateTodo(this.props.id, this.state.desc)
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
    }

    handleToggle(){
        this.props.toggleTodo(this.props.id);
    }

    render() {
        let display;
        if(this.state.isEditing){
            display = 
                <div>
                    <form onSubmit={this.handleSave}>
                    <input 
                        type="text"
                        name="desc"
                        value={this.state.desc}
                        onChange={this.handleChange}
                    />
                    <button>Save</button>
                    </form>
                </div>
        } else {
            display = <div>
            <li>
                <span className={this.props.isComplete ? "completed" : ""}
                    onClick={this.handleToggle} 
                >
                    {this.props.desc}
                </span>
            </li>
            <button onClick={this.handleRemove}>X</button>
            <button onClick={this.handleEdit}>Edit</button>
        </div>
        }

        return (
            display
        );
    }
}

export default Todo;

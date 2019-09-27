import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './NewTodoForm.css'

class NewTodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {desc: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState(
            {[event.target.name]: event.target.value}
        );
        console.log(this.state.desc)
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.addTodo({...this.state, id: uuid(), isComplete: false});
        this.setState({desc: ""});
    }

    render() {
        return (
                <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                    <label htmlFor="desc">New Todo</label>
                    <input
                        type="text"
                        placeholder="New Todo"
                        id="desc"
                        name="desc"
                        value={this.state.desc}
                        onChange={this.handleChange}
                    />
                    <button>Add Todo</button>
                </form>
        );
    }
}

export default NewTodoForm;

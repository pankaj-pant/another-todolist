import React, { Component } from 'react';
import uuid from 'uuid/v4';

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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="desc">New Todo</label>
                    </div>
                    <input
                        type="text"
                        id="desc"
                        name="desc"
                        value={this.state.desc}
                        onChange={this.handleChange}
                    />
                    <button>Add Todo</button>
                </form>
            </div>
        );
    }
}

export default NewTodoForm;

import React from "react"
import './CreateEditTask.css'
import { Link, withRouter } from "react-router-dom";
import { addTodo } from '../actions'
import { editTodo } from '../actions'
import { connect } from 'react-redux'

class CreateEditTask extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: "",
            createdBy: "",
            dateOfCreation: "",
            deadline: "",
            description: "",
            id: ""
        }

        this.state.id = this.props.edit === true ? localStorage.getItem('id') : null
        if(this.state.id != null){
            const task = this.props.todos.find(element => element.id == this.state.id)
            this.state.title = task.title
            this.state.createdBy = task.createdBy
            this.state.dateOfCreation = task.dateOfCreation
            this.state.deadline = task.deadline
            this.state.description = task.description
        }
    }

    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleCreatedByChange = (event) => {
            this.setState({
            createdBy: event.target.value
        })
    }
    handleDeadlineChange = (event) => {
            this.setState({
            deadline: event.target.value
        })
    }
    handleDescriptionChange = (event) => {
            this.setState({
            description: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let today = new Date();
        this.state.dateOfCreation = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const todoData = {
            title: this.state.title,
            createdBy: this.state.createdBy,
            dateOfCreation: this.state.dateOfCreation,
            deadline: this.state.deadline,
            description: this.state.description,
            id: this.state.id
        };
        this.props.edit ==  false ? 
            this.props.addTodo(todoData):
            this.props.editTodo(todoData);
        this.props.history.push('/')
    };
    
    render(){        
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="create-edit-task">
                    <label className="form-label">Title: </label>
                    <input className="form-input" type="text" value={this.state.title} onChange={this.handleTitleChange} />
                    <label className="form-label">Created By: </label>
                    <input className="form-input" type="text" value={this.state.createdBy} onChange={this.handleCreatedByChange} />
                    <label className="form-label">Deadline: </label>
                    <input className="form-input" type="date" value={this.state.deadline} onChange={this.handleDeadlineChange} />
                    <label className="form-label">Description: </label>
                    <textarea className="form-input-description" value={this.state.description} onChange={this.handleDescriptionChange} />
                    <div className="button-section">
                        <Link to="/">
                            <button className="create-edit-task-button">Cancel</button>
                        </Link>
                        
                            <button className="create-edit-task-button" type="submit" className="create-edit-task-button">
                                    Save
                                </button>
                    </div>
                </div>
            </form >
        );
    }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => { dispatch(addTodo(todo)) },
    editTodo: (todo) => { dispatch(editTodo(todo)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CreateEditTask))
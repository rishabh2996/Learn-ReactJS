import React from "react"
import './CreateEditTask.css'
import { Link, withRouter } from "react-router-dom";
// import history from '../routeHistory';

class CreateEditTask extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            createdBy: "",
            dateOfCreation: "",
            deadline: "",
            description: "",
        }

        const id = props.edit == true ? localStorage.getItem('id') : null
        if(props.edit == true){
            const task = props.todoList.find(element => element.id == id)
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
            id: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
        };
        const todos = {
            ...todoData,
        };
        this.props.edit == true? this.props.onEditingData(todos):
        this.props.onAddingData(todos);
        this.props.history.push('/')
        
    };
    

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
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
                                {/* <Link to="/"> */}
                                    Save
                                    {/* </Link> */}
                                </button>
                    </div>
                </div>
            </form >
        );
    }
}

export default withRouter(CreateEditTask)
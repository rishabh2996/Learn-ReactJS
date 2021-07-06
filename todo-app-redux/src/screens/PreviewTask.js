import React from "react"
import './PreviewTask.css'
import { Link } from "react-router-dom";
import {withRouter} from "react-router-dom"

function PreviewTask(props) {

    const queryString = window.location.pathname;
    const id = queryString.slice(14, queryString.length)

    const task = props.todoList.find(element => element.id == id)
    localStorage.setItem('id', id)

    const handleDelete = () => {
        props.onDeletingData(task);
    }

    return (
        <div className="preview-task">
            <div className="button-section">
                <Link to="/"><button className="preview-task-button" onClick={handleDelete}>Delete</button></Link>
                <Link to="/create_edit_task/edit"><button className="preview-task-button">Edit</button></Link>
                <Link to="/"><button className="preview-task-button">Close</button></Link>
            </div>
            <div className="task-info">
                <table className="info-table">
                    <tr>
                        <td className="info-label">Title:</td>
                        <td className="info">{task.title}</td>
                    </tr>
                    <tr>
                        <td className="info-label">Created By:</td>
                        <td className="info">{task.createdBy}</td>
                    </tr>
                    <tr>
                        <td className="info-label">Date of Creation:</td>
                        <td className="info">{task.dateOfCreation}</td>
                    </tr>
                    <tr>
                        <td className="info-label">Deadline:</td>
                        <td className="info">{task.deadline}</td>
                    </tr>
                    <tr>
                        <td className="info-label">Description:</td>
                        <td className="info">{task.description}</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default withRouter(PreviewTask)
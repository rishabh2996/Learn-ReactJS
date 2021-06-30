import React from "react"
import './PreviewTask.css'
import { Link } from "react-router-dom";

function PreviewTask(props) {
    console.log(props)
    return (
        <div className="preview-task">
            <div className="button-section">
                <Link to="/create_edit_task"><button className="preview-task-button">Edit</button></Link>
                <Link to="/"><button className="preview-task-button">Close</button></Link>
            </div>
            <div className="task-info">
                <table className="info-table">
                    <tr>
                        <td className="info-label">Title:</td>
                        <td className="info">{props.todoList[0].title}</td>
                    </tr>
                    <tr>
                        <td className="info-label">Created By:</td>
                        <td className="info">{props.todoList[0].createdBy}</td>
                    </tr>
                    <tr>
                        <td className="info-label">Date of Creation:</td>
                        <td className="info">{props.todoList[0].dateOfCreation}</td>
                    </tr>
                    <tr>
                        <td className="info-label">Deadline:</td>
                        <td className="info">{props.todoList[0].deadline}</td>
                    </tr>
                    <tr>
                        <td className="info-label">Description:</td>
                        <td className="info">{props.todoList[0].description}</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default PreviewTask
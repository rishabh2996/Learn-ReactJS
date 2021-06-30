import React from "react"
import "./components.css"
import { Link } from "react-router-dom";

function TaskItem(props) {
    return (
        <Link to="/preview_task">
            <div className="task-item">
                <p className="title">{props.title}</p>
                <p className="created-by">Created by: {props.createdBy}</p>
                <p className="deadline">Deadline: {props.deadline}</p>
            </div>
        </Link>
    );
}

export default TaskItem
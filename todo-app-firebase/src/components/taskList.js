import React from "react"
import "./components.css"
import { Link } from "react-router-dom";

function TaskItem(props) {
    const backUrl = "/preview_task"
    return (
            <div className="task-item">
                <p className="title">{props.title}</p>
                <p className="created-by">Created by: {props.createdBy}</p>
                <p className="deadline">Deadline: {props.deadline}</p>
            </div>
    );
}

export default TaskItem
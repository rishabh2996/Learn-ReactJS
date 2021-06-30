import React from "react"
import './components.css'
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <h1 className="app-title">Todo App</h1>
            <Link to="/create_edit_task">
                <button className="create-task-button">Create Todo</button>
            </Link>
        </div>
    );
}

export default Header
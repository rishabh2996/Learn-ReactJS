import React from "react"
import './Home.css';
import TaskItem from "../components/taskList"
import Header from "../components/header"
import { Link } from "react-router-dom";

function Home(props) {
    console.log(props.todoList)
    return (
        <div>
            <Header />
            {props.todoList.map((todo) => {
                return <Link to={`/preview_task/${todo.id}`}>
                    <TaskItem title={todo.title} createdBy={todo.createdBy} deadline={todo.deadline} key={todo.id} />
                    </Link>;
            })}
        </div>
    )
}

export default Home
import React from "react"
import './Home.css';
import TaskItem from "../components/taskList"
import Header from "../components/header"
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

function Home(props) {
    return (
        <div>
            <Header />
            {props.todos.map((todo) => {
                return <Link to={`/preview_task/${todo.id}`}>
                    <TaskItem title={todo.title} createdBy={todo.createdBy} deadline={todo.deadline} key={todo.id} />
                    </Link>;
            })}
        </div>
    )
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, null)(Home)
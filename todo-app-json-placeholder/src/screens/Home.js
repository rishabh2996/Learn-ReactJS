import React from "react"
import './Home.css';
import TaskItem from "../components/taskList"
import Header from "../components/header"

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            tasks: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users/1/todos')
            .then((response) => response.json())
            .then((json) => { console.log(json); this.setState({ tasks: json }) });
    }

    render(){
    return (
        <div>
            <Header />
            {this.state.tasks.map((todo) => {
                
                return <TaskItem title={todo.title} createdBy={todo.createdBy} deadline={todo.deadline} key={todo.id}></TaskItem>;
            })}
        </div>
    )}
}

export default Home
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log(action.title)
      return [
        ...state,
        {
            id: action.id, 
            title: action.title,
            createdBy: action.createdBy,
            dateOfCreation: action.dateOfCreation,
            deadline: action.deadline,
            description: action.description,
        }
      ]
    case 'EDIT_TODO':
        // const id = localStorage.getItem('id')
        // const task = this.state.todos.find(element => element.id == action.id)
        // const todoList = this.state.todos
        // const index = todoList.indexOf(task)
        // todoList[index] = data
        // this.setState((state)=>({
        //   todos: todoList
        // }))
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, 
            title: action.title,
            createdBy: action.createdBy,
            dateOfCreation: action.dateOfCreation,
            deadline: action.deadline,
            description: action.description,
        }
          : todo
      )

      case 'DELETE_TODO':
          const task = state.find(element => element.id === action.id)
          const todoList = state
          const index = todoList.indexOf(task)
          todoList.splice(index, 1);
          state = todoList
      return state

    default:
      return state
  }
}

export default todos

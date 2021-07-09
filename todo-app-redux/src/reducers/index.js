const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log('hey')
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
        const taskList = state
        taskList[action.id] = {
              title: action.title,
              createdBy: action.createdBy,
              dateOfCreation: action.dateOfCreation,
              deadline: action.deadline,
              description: action.description,
              id: action.id
        }
        state = taskList
      return state

      case 'DELETE_TODO':
          const todo = state.find(element => element.id == action.id)
          const todoList = state
          const index = todoList.indexOf(todo)
          console.log(index)
          todoList.splice(index, 1);
          state = todoList
      return state

    default:
      return state
  }
}

export default todos

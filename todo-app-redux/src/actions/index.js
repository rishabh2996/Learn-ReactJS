let nextTodoId = 0
export const addTodo = todo => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  title: todo.title,
  createdBy: todo.createdBy,
  dateOfCreation: todo.dateOfCreation,
  deadline: todo.deadline,
  description: todo.description,
})

export const editTodo = todo => ({
  type: 'EDIT_TODO',
  id: todo.id,
  title: todo.title,
  createdBy: todo.createdBy,
  dateOfCreation: todo.dateOfCreation,
  deadline: todo.deadline,
  description: todo.description,
})

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id
})
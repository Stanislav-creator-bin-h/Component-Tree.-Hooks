import React, { useState } from 'react';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';


function TodoList() {
  const [todos, setTodos] = useState([])

  const handleAddTodo = (newText) => {
    if (newText.trim() === "") return
    const newTodo = {
      id: Date.now(),
      text: newText,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleToggleComplete = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const handleEditTodo = (id, newText) => {
    if (newText.trim() === "") return
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)))
  }

  return (
    <div>
      <h1>TODO LIST</h1>
      <AddTodoForm onAddTodo={handleAddTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleComplete={handleToggleComplete}
            onDeleteTodo={handleDeleteTodo}
            onEditTodo={handleEditTodo}
          />
        ))}
      </ul>
      {todos.length === 0 && <p>No tasks yet. Add one above!</p>}
    </div>
  )
}

export default TodoList

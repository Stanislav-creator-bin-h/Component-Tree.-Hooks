import React, { useState } from "react"
import TodoItem from "./TodoItem"
import AddTodoForm from "./AddTodoForm"

interface Todo {
  id: number
  text: string
  completed: boolean
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAddTodo = (newText: string) => {
    if (newText.trim() === "") return
    const newTodo: Todo = {
      id: Date.now(),
      text: newText,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleToggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const handleEditTodo = (id: number, newText: string) => {
    if (newText.trim() === "") return
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    )
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

import { useState } from "react"

function AddTodoForm({ onAddTodo }) {
  const [newTodo, setNewTodo] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newTodo.trim()) {
      onAddTodo(newTodo)
      setNewTodo("")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add a new task..." value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  )
}

export default AddTodoForm

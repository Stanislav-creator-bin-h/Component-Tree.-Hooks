import type React from "react"
import { useState } from "react"

interface Todo {
  id: number
  text: string
  completed: boolean
}

interface TodoItemProps {
  todo: Todo
  onToggleComplete: (id: number) => void
  onDeleteTodo: (id: number) => void
  onEditTodo?: (id: number, newText: string) => void
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggleComplete, onDeleteTodo, onEditTodo }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedText, setEditedText] = useState(todo.text)

  const handleSave = () => {
    if (onEditTodo) {
      onEditTodo(todo.id, editedText)
    }
    setIsEditing(false)
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  const itemClassName = todo.completed ? "completed" : "";

  return (
    <li className={itemClassName}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleComplete(todo.id)}
      />

      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onBlur={handleSave}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSave()
            }
          }}
          autoFocus
        />
      ) : (
        <span>{todo.text}</span>
      )}

      <div>
        {onEditTodo &&
          (isEditing ? (
            <button onClick={handleSave}>Save</button>
          ) : (
            <button onClick={handleEdit}>Edit</button>
          ))}
        <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
      </div>
    </li>
  )
}

export default TodoItem
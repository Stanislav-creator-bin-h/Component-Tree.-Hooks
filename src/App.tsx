import React from "react"
import TodoList from "./components/TodoList"
import "./styles/global.css"

const Home: React.FC = () => {
  return (
    <main>
      <TodoList />
    </main>
  )
}

export default Home

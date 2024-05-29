import { useEffect, useState } from 'react'
import './App.css'
import Forms from './components/Forms'
import Todolist from './components/Todolist'

function App() {

  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])

  const filteredHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }

  useEffect(() => {
    getLocalTodos()
  }, [])


  useEffect(() => {
    filteredHandler(todos)
    if (todos.length !== 0) {
      saveLocalTodos()
    }
    if (todos.length === 0) {
      localStorage.removeItem("todos")
    }
  }, [todos, status])


  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]))
    }
    else {
      setTodos(JSON.parse(localStorage.getItem("todos")))
    }
  }

  return (
    <>
      <div className='container'>
        <header><h1>To Do List</h1></header>
        <Forms inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} setStatus={setStatus} />
        <Todolist todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
      </div>
    </>
  )
}

export default App

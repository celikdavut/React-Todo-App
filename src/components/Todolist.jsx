import React from 'react'
import Todo from './Todo'

function Todolist({ todos, setTodos, filteredTodos }) {
  return (
    <div className='todo-container' >
      <ul className="todo-list">
        {
          filteredTodos.map((todo) => (
            <Todo text={todo.text} key={todo.id} todos={todos} setTodos={setTodos} todo={todo} />
          ))
        }

      </ul>

    </div>
  )
}

export default Todolist
import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

function Todo({ text, todos, setTodos, todo }) {

    const deleteHandler = () => {
        setTodos(todos.filter((eL) => eL.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item
        }))
    }
    return (
        <div className={` todo ${todo.completed ? "completed" : ""} `} >
            <button className='complete-btn' onClick={completeHandler} >
                <FaCheckCircle />
            </button>

            <li className='todo-item' > {text} </li>

            <button className='trash-btn' onClick={deleteHandler} >
                <FaMinusCircle />
            </button>

        </div>
    )
}

export default Todo
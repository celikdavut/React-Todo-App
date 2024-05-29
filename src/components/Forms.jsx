import React, { useState } from 'react'
import { FaCirclePlus } from "react-icons/fa6";

function Forms({ inputText, setInputText, todos, setTodos, setStatus }) {

    const [alertWarning, setAlertWarning] = useState(false)
    const [alertSuccess, setAlertSuccess] = useState(false)


    const submitTodoHandler = (e) => {

        e.preventDefault()
        const isEmpty = str => !str.trim().length
        if (isEmpty(inputText)) {
            setAlertWarning(true)
            setTimeout(() => {
                setAlertWarning(false)
            }, 1000);
        } else {
            setAlertSuccess(true)
            setTimeout(() => {
                setAlertSuccess(false)
            }, 1000);
            setTodos([
                ...todos,
                { text: inputText, completed: false, id: Math.random() }
            ])
        }

        console.log(todos)
        setInputText("")
    }

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
        console.log(e.target.value)
    }

    const changeHandler = (e) => {
        setStatus(e.target.value)
        console.log(e.target.value)
    }

    return (
        <form >
            <div className="search">
                <input type="text" placeholder='Add...' className='todo-input' onChange={inputTextHandler} value={inputText} />
                <button type='submit' className='todo-button' onClick=
                    {submitTodoHandler} >
                    <FaCirclePlus />
                </button>
            </div>
            <div className='select'>
                <select name="todos" className='filter-todo' onChange={changeHandler} >
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>



            <div className="alert-wrapper">

                {
                    alertWarning ?
                        <div className="alert-warning">
                            <div>Input cannot be empty</div>
                        </div> : ""

                }


                {
                    alertSuccess ?
                        <div className="alert-success">
                            <div>Addition successful!</div>
                        </div> : ""
                }
            </div>
        </form>
    )
}

export default Forms
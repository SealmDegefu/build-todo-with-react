import React, { useState } from 'react'


const Form = ({ setInputText, todos, setTodos, inputText, setStatus, patchTodo}) => {

  const inputTextHandler = (e) =>{
    setInputText(e.target.value)
  }

  const submitTodoHandler = (e) =>{
    e.preventDefault()
    requestItem()
    setInputText("");
  }

  const statusHandler =(e) =>{
    setStatus(e.target.value)
  }
 

  const requestItem = () => {
    let postOptions = {
      method: "POST",
      headers :{
      "Content-Type": 'application/json',
      Accepts: 'application/json'
      },
      body: JSON.stringify({   "todo": inputText,
      "isCompleted": false})
    }
    fetch('http://localhost:3001/tasks', postOptions)
    .then(res=>res.json())
    .then(todo=> setTodos([
      ...todos, todo
    ]))
  }
    
  return (
        <div>
        <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit" >
          <i className="fas fa-plus-square"></i>
        </button>
        <span className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
          </span>
        </form>
        </div>
    )
}

export default Form
import React from 'react'
import Todo from './Todo'

const Todolist = ({ todoList, handleToggle, handleFilter }) => {
    return (
        <div>
        {todoList.length > 1 ? todoList.map(todo => <ul> <li> <Todo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/></li></ul>) : null}
           { todoList.length > 1 ? <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>: null}
        </div>
    )
}

export default Todolist

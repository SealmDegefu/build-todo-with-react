import React from 'react'
import Todo from './Todo'


const Todolist = ({ todos, setTodos, filteredTodos, deleteTodo}) => {
    return (

<div className="todo-container">
      <ul className ="todo-list">
{filteredTodos.map((todo) => (
  <Todo 
  deleteTodo={deleteTodo}
  setTodos={setTodos} 
  todos={todos} 
  todo={todo} 
  text={todo.todo} 
  key={todo.id}/>
))}
      </ul>
    </div>

    )
}

export default Todolist

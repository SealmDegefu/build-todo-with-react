import React, { useState, useEffect } from 'react'
import TodoList from './Todolist'
import Form from './Form'

const Content = () => {

    
  const [ todoList, setTodoList ] = useState([]);

  const handleToggle = (id) => {
    let mapped = todoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setTodoList(mapped);
  }

  const handleFilter = () => {
    let filtered = todoList.filter(task => {
      return !task.complete;
    });
    setTodoList(filtered);
  }

  const addTask = (userInput ) => {
    let copy = [...todoList];
    copy = [...copy, { id: todoList.length + 1, task: userInput, complete: false }];
    setTodoList(copy);
  }
  return (
    <div>
      <Form addTask={addTask}
      />
      <TodoList todoList={todoList} handleToggle={handleToggle} handleFilter={handleFilter}
      />
    </div>
  )
}

export default Content
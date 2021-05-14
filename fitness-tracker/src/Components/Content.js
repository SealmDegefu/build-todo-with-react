import React, { useState, useEffect } from 'react'
import TodoList from './Todolist'
import Form from './Form'
import axios from 'axios'


const Content = () => {
  
  //states

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilterTodos] = useState([]);
  
  //useEffect
  useEffect(() => {
    filterHandler();
  }, [todos, status]);
  
  //functions
  
  const filterHandler = () =>{
    switch (status) {
      case "completed":
        setFilterTodos(todos.filter((todo) => todo.completed === true))
        break;
        case "uncompleted":
          setFilterTodos(todos.filter((todo) => todo.completed === false))
          break;
          default:
            setFilterTodos(todos);
            break;
          }
        }
        
        // //axios request
        // const api = axios.create({
        //   baseURL: `http://localhost:3001/weeklyGoal/`
        // })

        
        // const deleteTodo = async (id) =>{
        //   let data = await api.delete(`/${id}`)
        //   this.getTodos();
        // }

        // const patchTodo = async (id, val) => {
        //   let data = await api.patch(`/${id}`, { list: val })
        //   this.getTodos()
        // }


  return (
    <div>
      <Form 
      setStatus={setStatus}
      todos={todos}
      setInputText={setInputText} 
      setTodos={setTodos} 
      inputText={inputText}
      // patchTodo={patchTodo}
      />
      <TodoList 
        // deleteTodo={deleteTodo}
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  )
}

export default Content
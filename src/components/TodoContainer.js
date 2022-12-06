import React, {useState, useEffect} from 'react'
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';
import { v4 as uuidv4 } from "uuid";

function TodoContainer() {

  const initialState = {
    todos: [
      {
        id: uuidv4(),
        title: "Setup development environment",
        completed: true
      },
      {
        id: uuidv4(),
        title: "Develop website and add content",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Deploy to live server",
        completed: false
      }
    ]
   };
  
  const todos = JSON.parse(localStorage.getItem("todos"))
  
  const [state, setState] = useState((todos===null) ? initialState : todos)
  
  if (todos===null) {
    localStorage.setItem("todos", JSON.stringify(initialState))
  }
  
  console.log(todos)
  
  const handleChange = (id) => {
    setState({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };
  
  const delTodo = id => {
    setState({
      todos: [
        ...state.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    });
  };
  
  const addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    setState({
      todos: [...state.todos, newTodo]
    });
  };
  
  const setUpdate = (updatedTitle, id) => {
    setState({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      }),
    })
  }
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state))
  }, [state])
  
  
  return (
    <div className='container'>
      <div className='inner'>
        <Header/>
        <InputTodo addTodoProps={addTodoItem} />
        <TodosList todos={state.todos} handleChangeProps={handleChange} deleteTodoProps={delTodo} setUpdate={setUpdate} />
      </div>
    </div>
  )
}

export default TodoContainer
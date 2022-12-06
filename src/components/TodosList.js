/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import TodoItem from './TodoItem';

function TodosList(props) {
  return (
    <div>
      <ul>
        {props.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} handleChangeProps={props.handleChangeProps} deleteTodoProps={props.deleteTodoProps} setUpdate={props.setUpdate} />
        ))}
      </ul>
    </div>
  );
}

export default TodosList;

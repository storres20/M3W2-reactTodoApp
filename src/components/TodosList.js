/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodosList({
  todos, handleChangeProps, deleteTodoProps, setUpdate,
}) {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} handleChangeProps={handleChangeProps} deleteTodoProps={deleteTodoProps} setUpdate={setUpdate} />
        ))}
      </ul>
    </div>
  );
}

TodosList.propTypes = {
  todos: PropTypes.arrayOf.isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodosList;

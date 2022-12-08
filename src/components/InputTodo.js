/* eslint-disable no-alert */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlusCircle } from 'react-icons/fa';

function InputTodo({ addTodoProps }) {
  const initialTitle = '';

  const [title, setTitle] = useState(initialTitle);

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoProps(title);
      setTitle('');
    } else { alert('Please write item'); }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input type="text" className="input-text" placeholder="Add Todo..." value={title} name="title" onChange={onChange} />
      <button type="button" className="input-submit">
        <FaPlusCircle
          style={{ color: 'darkcyan', fontSize: '20px', marginTop: '2px' }}
        />
      </button>
    </form>
  );
}

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};

export default InputTodo;

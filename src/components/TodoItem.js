/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import styles from './TodoItem.module.css';

function TodoItem(props) {
  const [editing, setEditing] = useState(false);

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const { completed, id, title } = props.todo;

  const handleEditing = () => {
    setEditing(true);
  };

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  return (
    <div>
      <li className={styles.item}>
        <input type="checkbox" className={styles.checkbox} checked={completed} onChange={() => props.handleChangeProps(id)} />
        <button type="button" onClick={() => props.deleteTodoProps(id)}>
          <FaTrash style={{ color: 'orangered', fontSize: '16px' }} />
        </button>

        <span onDoubleClick={handleEditing} className={editing ? styles.viewMode : ''} style={completed ? completedStyle : null}>
          {title}
        </span>
        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          value={title}
          onChange={(e) => {
            props.setUpdate(e.target.value, id);
          }}
          onKeyDown={handleUpdatedDone}
        />
      </li>
    </div>
  );
}

export default TodoItem;

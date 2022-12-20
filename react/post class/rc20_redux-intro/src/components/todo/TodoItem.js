import React from 'react';
import okLogo from '../../assets/ok.png';
import deleteLogo from '../../assets/delete.png';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../redux/actions/todoAction';

const TodoItem = ({ isDone, text, id }) => {
  
  const dispatch = useDispatch()
  const handleToggle = () => {


  };

  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteTodo(id))
  };

  const styled = {
    textDecoration: isDone ? 'line-through' : 'none',
    backgroundColor: isDone ? '#A9A9A9' : 'orange',
    borderRadius: '5px',
  };

  return (
    <div style={styled} className="todo-list">
      <h2 className="todoText">{text}</h2>
      <div>
        <span>
          <img
            src={okLogo}
            className="ok-logo"
            alt="ok logo"
            onClick={handleToggle}
          />
        </span>
        <span>
          <img
            src={deleteLogo}
            className="delete-logo"
            alt="delete logo"
            onClick={handleDelete}
          />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;

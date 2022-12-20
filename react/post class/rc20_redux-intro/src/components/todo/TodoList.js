import { useDispatch, useSelector } from 'react-redux';
import { clearTodo } from '../../redux/actions/todoAction';
import TodoItem from './TodoItem';

const TodoList = () => {
  const dispatch = useDispatch()
  const handleClearList = () => {
   dispatch(clearTodo())
  };
       
  const todos = useSelector(state=>state.todoReducer.todoList)
  console.log(todos);
  return (
    <div>
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <div className="clear-wrapper">
        <button onClick={handleClearList} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  );
};

export default TodoList;

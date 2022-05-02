import React, { FunctionComponent, useState, ChangeEvent } from 'react';
import classes from './Todo.module.css';
import TodoItem from './components/TodoItem';
import Logo from './assets/logo.png';

const Todo: FunctionComponent = () => {
  const [state, setState] = useState<Array<string>>([]);
  const [todo, setTodo] = useState<string>('');

  const createNewTodoItem = () => {
    setState(prev => [...prev, todo]);
    setTodo('');
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      createNewTodoItem();
    }
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) =>
    setTodo(e.target.value);

  // this is now being emitted back to the parent from the child component
  const deleteItem = (indexToDelete: number) => {
    setState(list => list.filter((toDo, index) => index !== indexToDelete));
  };

  return (
    <div >
      <img className={classes.Logo} src={Logo} alt="React logo" />
      <h1 className={classes['Todo-Header']}>React To Do</h1>
      <div className={classes['Todo-Container']}>
        <div className={classes['Todo-Content']}>
          {state.map((item, key) => {
            return (
              <TodoItem
                // eslint-disable-next-line react/no-array-index-key
                key={key}
                item={item}
                deleteItem={() => deleteItem(key)}
              />
            );
          })}
        </div>

        <div>
          <input
            type="text"
            value={todo}
            onChange={handleInput}
            onKeyPress={handleKeyPress}
          />
          <button
            className={classes['Todo-Add']}
            type="button"
            onClick={createNewTodoItem}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;

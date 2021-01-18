import React, { FunctionComponent, useState, ChangeEvent } from 'react';
import './Todo.css';
import ToDoItem from './components/ToDoItem';
import Logo from './assets/logo.png';

const Todo: FunctionComponent = () => {
  const [state, setState] = useState<Array<string>>([]);
  const [todo, setTodo] = useState<string>('');

  const createNewToDoItem = () => {
    setState(prev => [...prev, todo]);
    setTodo('');
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      createNewToDoItem();
    }
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) =>
    setTodo(e.target.value);

  // this is now being emitted back to the parent from the child component
  const deleteItem = (indexToDelete: number) => {
    setState(list => list.filter((toDo, index) => index !== indexToDelete));
  };

  return (
    <div className="ToDo">
      <img className="Logo" src={Logo} alt="React logo" />
      <h1 className="ToDo-Header">React To Do</h1>
      <div className="ToDo-Container">
        <div className="ToDo-Content">
          {state.map((item, key) => {
            return (
              <ToDoItem
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
            className="ToDo-Add"
            type="button"
            onClick={createNewToDoItem}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;

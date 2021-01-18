import React, { FunctionComponent } from 'react';
import './ToDoItem.css';

const ToDoItem: FunctionComponent<{
  deleteItem: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  item: string;
}> = props => {
  const { deleteItem, item } = props;

  return (
    <div className="ToDoItem">
      {/* <p className="ToDoItem-Text">{props.item}</p> */}
      <p className="ToDoItem-Text">{item}</p>
      <button
        className="ToDoItem-Delete"
        type="button"
        // onClick={props.deleteItem}
        onClick={deleteItem}
      >
        -
      </button>
    </div>
  );
};

export default ToDoItem;

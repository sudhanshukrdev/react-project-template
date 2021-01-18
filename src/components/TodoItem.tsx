import React, { FunctionComponent } from 'react';
import classes from './TodoItem.module.css';

const TodoItem: FunctionComponent<{
  deleteItem: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  item: string;
}> = props => {
  const { deleteItem, item } = props;

  return (
    <div className={classes.TodoItem}>
      {/* <p className={classes['TodoItem-Text']}>{props.item}</p> */}
      <p className={classes['TodoItem-Text']}>{item}</p>
      <button
        className={classes['TodoItem-Delete']}
        type="button"
        // onClick={props.deleteItem}
        onClick={deleteItem}
      >
        -
      </button>
    </div>
  );
};

export default TodoItem;

import React from "react";

import './todolist.css';

/**
 * Presentational Component
 */
const TodoList = (props) => {

  const { list } = props;
  return (<div className="todolist">
    Todo List
    {
      list.map((listItem) => (
      <div>
      <input type="checkbox" checked={listItem.status} ></input>
      <h3>
        {listItem.name}
      </h3>
      </div>
      ) )
    }
    </div>);
};

export default TodoList;

import React from "react";

import './todolist.css';

/**
 * Presentational Component
 */
const TodoList = (props) => {

  const { tasks } = props;
  return (<div className="todolist">
    Todo List
    {
      tasks.list.map((listItem) => (
      <div>
      <input type="checkbox" ></input>
      <h3>
        {listItem}
      </h3>
      </div>
      ) )
    }
    </div>);
};

export default TodoList;

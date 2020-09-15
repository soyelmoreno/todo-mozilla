import React from "react";
import Todo from "./components/Todo";
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";

function App(props) {
  const taskList = props.tasks.map((task) => (
    <Todo
      id={task.id}
      completed={task.completed}
      name={task.name}
      key={task.id}
    />
  ));

  const buttons = props.btns.map((btn) => (
    <FilterButton label={btn.label} pressed={btn.pressed} />
  ));

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form />
      <div className="filters btn-group stack-exception">{buttons}</div>
      <h2 id="list-heading">3 tasks remaining</h2>
      {/* eslint-disable-next-line */}
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;

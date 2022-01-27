import React from "react";
import TodoList from "./component/todo/TodoList";
import Counter from "./component/Counter/Counter";

const App = () => {
  return (
    <div>
      <TodoList />
      <hr />
      <Counter />
    </div>
  );
};

export default App;

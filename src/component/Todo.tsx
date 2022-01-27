import { IState } from "./Interface";
import React, { useState } from "react";

interface IProps {
  todo: IState["todo"];
  toggleIsCompleted: IState["toggleIsCompleted"];
  handleDeleteTodo: IState["handleDeleteTodo"];
  setState: IState["setState"];
}

const Todo: React.FC<IProps> = ({
  handleDeleteTodo,
  todo,
  toggleIsCompleted,
  setState,
}) => {
  const [updatedTodo, setUpdatedTodo] = useState<string>("");

  const handleUpdate = (id: Date, e: React.MouseEvent<HTMLButtonElement>) => {
    if (updatedTodo === "") return;
    setState((prev: any) =>
      prev.map((todo: any) =>
        todo.id === id ? { ...todo, todoName: updatedTodo } : todo
      )
    );
    setUpdatedTodo("");
  };
  return (
    <>
      <p
        style={
          todo.isCompleted
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {todo.todoName}
      </p>

      <input
        name="updatedTodo"
        type="text"
        value={updatedTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUpdatedTodo(e.target.value)
        }
        placeholder="modify your todo"
      />
      <button onClick={() => toggleIsCompleted(todo.id)}>Done</button>
      <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
      <button onClick={(e) => handleUpdate(todo.id, e)}>modify</button>

      <hr />
    </>
  );
};
export default Todo;

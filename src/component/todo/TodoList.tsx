import React, { useRef, useState } from "react";
import Todo from "./Todo";
import { IState } from "./Interface";

const TodoList = () => {
  const [todos, setTodos] = useState<IState["todo"][]>([
    {
      todoName: "first Todo",
      id: new Date(),
      isCompleted: false,
    },
  ]);
  const [test, setTest] = useState<IState["test"]>({ test: "test" });
  const todoRef = useRef<HTMLInputElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleAddTodo = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (todoRef.current && formRef.current) {
      const newTodoName = todoRef.current.value;
      setTodos([
        ...todos,
        { todoName: newTodoName, isCompleted: false, id: new Date() },
      ]);
      formRef.current.reset();
    }
  };

  const toggleIsCompleted = (id: Date) => {
    setTodos(
      todos.map((t) => {
        return t.id === id ? { ...t, isCompleted: !t.isCompleted } : t;
      })
    );
  };

  const handleDeleteTodo = (id: Date) => {
    setTodos(
      todos.filter((t) => {
        return t.id != id;
      })
    );
  };

  return (
    <div>
      {todos.map((todo, i) => {
        return (
          <Todo
            handleDeleteTodo={handleDeleteTodo}
            toggleIsCompleted={toggleIsCompleted}
            setState={setTodos}
            key={i}
            todo={todo}
          />
        );
      })}
      <form ref={formRef} onSubmit={handleAddTodo}>
        <input ref={todoRef} type="text" placeholder="add new todo" />
      </form>
    </div>
  );
};

export default TodoList;

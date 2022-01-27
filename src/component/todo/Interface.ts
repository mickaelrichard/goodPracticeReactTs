export interface IState {
  todo: {
    id: Date;
    todoName: string;
    isCompleted: Boolean;
  };
  toggleIsCompleted: (id: Date) => void;
  handleDeleteTodo: (id: Date) => void;
  setState: React.Dispatch<React.SetStateAction<IState["todo"][]>>;
  test: {
    test: string;
  };
}

import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

interface TodoItem {
  id: number;
  text: string;
  isComplete: boolean;
}

interface TodoProps {
  todos: TodoItem[];
  completeTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  updateTodo: (id: number, value: string) => void;
}

const Todo: React.FC<TodoProps> = ({
  todos,
  completeTodo,
  removeTodo,
  updateTodo,
}) => {
  const [edit, setEdit] = useState<{ id: number | null; value: string }>({
    id: null,
    value: "",
  });

  const submitUpdate = (value: string) => {
    updateTodo(edit.id!, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id !== null) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <>
      {todos.map((todo, index) => (
        <div
          className={todo.isComplete ? "todo-row complete" : "todo-row"}
          key={index}
        >
          <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
          </div>
          <div className="icons">
            <RiCloseCircleLine
              onClick={() => removeTodo(todo.id)}
              className="delete-icon"
            />
            <TiEdit
              onClick={() => setEdit({ id: todo.id, value: todo.text })}
              className="edit-icon"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Todo;

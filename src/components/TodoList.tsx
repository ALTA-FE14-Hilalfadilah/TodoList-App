import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

interface Todo {
  id: number;
  text: string;
  isComplete: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId: number, newValue: Todo) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id: number) => {
    const removedArr = todos.filter((todo) => todo.id !== id);
    setTodos(removedArr);
  };

  const completeTodo = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isComplete: !todo.isComplete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="todoapps">
      <h1>ToDoList Apps</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoList;

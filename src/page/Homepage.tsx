import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoList from "../components/TodoList";
import { withRouter } from "../Router/withRouter";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const Homepage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.todoist.com/rest/v2/tasks", {
        headers: {
          Authorization: "Bearer 4c9d16ba3304cfd42eeddfbcb9dda0510e21c1f1",
        },
      })
      .then((res) => {
        const { data } = res;
        const results = data as Todo[];
        if (results) {
          setTodos(results);
        }
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <TodoList />
    </div>
  );
};

export default withRouter(Homepage);

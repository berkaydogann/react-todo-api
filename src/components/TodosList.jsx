import React, { useEffect, useState } from "react";
import axios from "axios";
import { AxiosContext } from "react-axios/lib/components/AxiosProvider";
import { getDefaultNormalizer } from "@testing-library/react";
const TodosList = ({
  todos,
  setTodos,
  setEditToDo,
  setInput,
  request,
  setRequest,
}) => {
  const handleDelete = async (todo) => {
    const newTodos = todos.filter((item) => item.id != todo.id);
    setTodos(newTodos);
    await axios.delete(
      "https://630fada536e6a2a04edfbc08.mockapi.io/todos/" + todo.id
    );
  };
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const allData = await axios.get(
      "https://630fada536e6a2a04edfbc08.mockapi.io/todos/"
    );
    console.log(allData, "data");
    setTodos(allData.data, "allData");
  };

  const handleEdit = async (todo) => {
    const findTodo = todos.filter((item) => item.id == todo.id);
    setEditToDo(true);
    setInput(findTodo[0].todovalue);
    setRequest(findTodo[0].id);
    console.log(findTodo, "todoslistvlaue");
  };
  const handleCompleted = async (todo) => {
    await axios.put(
      "https://630fada536e6a2a04edfbc08.mockapi.io/todos/" + todo.id,
      {
        completed: true,
      }
    );
    getData();
  };

  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.todovalue}
            //className= {`list ${todo.completed} ? "completed" : "" `}
            className={todo.completed ? "completed" : "list"}
            onChange={(e) => e.preventDefault()}
          />
          <div>
            <button
              className="button-complete"
              onClick={() => handleCompleted(todo)}
            >
              {" "}
              Completed
            </button>
            <button className="button-edit" onClick={() => handleEdit(todo)}>
              {" "}
              Edit
            </button>
            <button
              className="button-delete"
              onClick={() => handleDelete(todo)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodosList;

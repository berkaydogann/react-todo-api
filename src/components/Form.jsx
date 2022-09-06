import React, { useEffect } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";
const Form = ({
  input,
  setInput,
  todos,
  setTodos,
  editTodo,
  setEditToDo,
  userName,
  setUserName,
  request,
  setRequest,
}) => {
  const userNameTextHandler = (userName) => {
    setUserName(userName);
  };

  const updateTodo = (title) => {
    const findTodo = todos.filter((item) => item.id == title.id);
    setTodos(findTodo);
    setEditToDo("");
  };
  const onFormSubmit = async (e) => {
    e.preventDefault();

    if (!editTodo) {
      console.log(editTodo, "if girdi");
      const newToDo = { todovalue: input, completed: false };
      setTodos([...todos, newToDo]);
      createPost(input);
      setInput("");
    } else {
      console.log(editTodo, "else girdi");
      await axios.put(
        "https://630fada536e6a2a04edfbc08.mockapi.io/todos/" + request,
        {
          todovalue: input,
        }
      );
      updateTodo(input, editTodo.completed);
      setRequest("");
      getData();
    }
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

  async function createPost(input) {
    const data = await axios.post(
      "https://630fada536e6a2a04edfbc08.mockapi.io/todos",
      {
        todovalue: input,
      }
    );
    getData();
  }
  const updateHandler = () => {
    if (editTodo) {
      console.log(editTodo, "ifedittodo");
    } else {
      //setInput("");
    }
  };
  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter a To Do..."
        className="task-input"
        value={input}
        required
        minLength={3}
        onChange={onInputChange}
      />
      <input
        type="text"
        placeholder="Enter Name..."
        className="user-input"
        value={userName}
        required
        onChange={userNameTextHandler}
      />
      <button className="button-add" type="submit" onClick={updateHandler}>
        {editTodo ? "OK" : "Add"}
      </button>
    </form>
  );
};

export default Form;

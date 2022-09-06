import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import TodosList from "./components/TodosList";
import { createContext } from "react";
import ReactSwitch from "react-switch";
import axios from "axios";

export const ThemeContext = createContext(null);

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("acc")) || [];
  const initialThemeState = JSON.parse(localStorage.getItem("theme")) || "light";
  const [theme, setTheme] = useState(initialThemeState);
  const [input, setInput] = useState("");
  const [userName, setUserName] = useState(initialState);
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditToDo] = useState(false);
  const [apiInput, setapiInput] = useState([]);
  const [request, setRequest] = useState("");
  
  useEffect(() => {
    localStorage.setItem("acc", JSON.stringify([userName]));
    localStorage.setItem("theme", JSON.stringify([theme]));
  }, [userName, theme]);

  const toggleTheme = (e) => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="container" id={theme}>
        <div className="app-wrapper">
          <div className="switch">
            <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          </div>
          <div>
            <Header userName={userName} setUserName={setUserName} />
          </div>
          <div>
            <Form
              input={input}
              setInput={setInput}
              todos={todos}
              setTodos={setTodos}
              editTodo={editTodo}
              setEditToDo={setEditToDo}
              userName={userName}
              setUserName={setUserName}
              request={request}
              setRequest={setRequest}
            />
          </div>
          <div>
            <TodosList
              input={input}
              setInput={setInput}
              todos={todos}
              setTodos={setTodos}
              editTodo={editTodo}
              setEditToDo={setEditToDo}
              userName={userName}
              setUserName={setUserName}
              request={request}
              setRequest={setRequest}
            />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;

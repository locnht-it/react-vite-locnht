import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import reactLogo from "./assets/react.svg";
import { useState } from "react";

const App = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learning React" },
    { id: 2, name: "Watching Youtube" },
  ]);

  const locnht = `LocNHT`;
  const age = 22;
  const data = {
    address: "Ho Chi Minh City",
    country: "Vietnam",
  };

  const addNewTodo = (name) => {
    alert(`Call me ${name}`);
  };

  // {key:value}
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew addNewTodo={addNewTodo} />
      <TodoData name={locnht} age={age} data={data} todoList={todoList} />
      <div className="todo-image">
        <img src={reactLogo} alt="react logo" className="logo" />
      </div>
    </div>
  );
};

export default App;

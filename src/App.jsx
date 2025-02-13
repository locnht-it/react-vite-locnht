import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import reactLogo from "./assets/react.svg";

const App = () => {
  const locnht = `LocNHT`;
  const age = 22;
  const data = {
    address: "Ho Chi Minh City",
    country: "Vietnam",
  };
  // {key:value}
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew />
      <TodoData name={locnht} age={age} data={data} />
      <div className="todo-image">
        <img src={reactLogo} alt="react logo" className="logo" />
      </div>
    </div>
  );
};

export default App;

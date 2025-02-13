const TodoNew = (props) => {
  console.log(`>>> Check props: `, props);
  const { addNewTodo } = props;

  //   addNewTodo(`Loc`);

  // fire = run
  const handleClick = () => {
    alert("Click me");
  };

  const handleOnChange = (name) => {
    console.log(`>>> Handle OnChange`, name);
  };

  return (
    <div className="todo-new">
      <input
        type="text"
        onChange={(event) => handleOnChange(event.target.value)}
      />
      <button style={{ cursor: "pointer" }} onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default TodoNew;

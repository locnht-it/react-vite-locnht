const TodoData = (props) => {
  const { todoList, deleteTodo } = props;

  const handleClick = (id) => {
    deleteTodo(id);
  };

  console.log(`>>> Check props: `, props.todoList);
  return (
    <div className="todo-data">
      {todoList.map((item, index) => {
        console.log(">>> Check map: ", item, index);
        return (
          <div className="todo-item" key={item.id}>
            <div>{item.name}</div>
            <button
              style={{ cursor: "pointer" }}
              onClick={() => handleClick(item.id)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoData;

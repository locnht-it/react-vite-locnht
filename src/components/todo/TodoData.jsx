const TodoData = (props) => {
  const { todoList } = props;
  console.log(`>>> Check props: `, props.todoList);
  return (
    <div className="todo-data">
      {todoList.map((item, index) => {
        console.log(">>> Check map: ", item, index);
        return (
          <div className="todo-item" key={index}>
            <div>{item.name}</div>
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoData;

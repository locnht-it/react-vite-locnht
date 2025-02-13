const TodoData = (props) => {
  // props is an object {}
  //   {
  //     name: "LocNHT",
  //     age: 22,
  //     data: {}
  //   }

  // destructuring object
  const { name, age, data } = props;
  console.log(`>>> Check props: `, props);
  return (
    <div className="todo-data">
      <div>My name is {name}</div>
      <div>Learning React</div>
      <div>Watching Youtube</div>
      <div>{JSON.stringify(props.todoList)}</div>
    </div>
  );
};

export default TodoData;

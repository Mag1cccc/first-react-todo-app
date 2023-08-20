export const Task = (props) => {
  return (
    <div
      className="addedTask"
      style={{ backgroundColor: props.completed ? "red" : "white" }}
    >
      <h1>{props.taskName}</h1>
      <button onClick={() => props.completeTask(props.id)}> Complete </button>
      <button onClick={() => props.deleteTask(props.id)}> Delete Task </button>
    </div>
  );
};

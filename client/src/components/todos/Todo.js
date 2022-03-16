
const Todo = ({ id, title, complete }) => {
  return (
    <>
      <h3>Todo# {id} {title}</h3>
      <p>{complete ? "Completed" : "Not Completed"}</p>
    </>
  )
}

export default Todo;
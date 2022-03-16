import { useState } from 'react';
import TodoForm from './TodoForm';

const Todo = ({ id, title, complete, updateTodo }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      {
        editing ?
          <>
            <TodoForm
              id={id}
              title={title}
              complete={complete}
              updateTodo={updateTodo}
              setEdit={setEdit}
            />
            <button
              onClick={() => setEdit(false)}
            >
              Cancel
            </button>
          </>
        :
        <>
          <h3>Todo# {id} {title}</h3>
          <p>{complete ? "Completed" : "Not Completed"}</p>
          <button
            onClick={() => setEdit(true)}
          >
            Edit
          </button>
        </>
      }
    </>
  )
}

export default Todo;
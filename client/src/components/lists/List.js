import { useState } from 'react';
import ListForm from './ListForm';

const List = ({ id, title, desc, updateList }) => {
  const [editing, setEdit] = useState(false)

  return(
    <>
      {
        editing ?
        <>
         <ListForm 
            id={id}
            title={title}
            desc={desc}
            updateList={updateList}
            setEdit={setEdit}
         />
         <button onClick={() => setEdit(false)}>
            Cancel
          </button>
        </>
        :
        <>
          <h5>{title}</h5>
          <p>{desc}</p>
          <button onClick={() => setEdit(true)}>
            Edit
          </button>
            Delete
          </button>
          <button>
            Todos
          </button>
        </>
      }
    </>
  )
}

export default List;
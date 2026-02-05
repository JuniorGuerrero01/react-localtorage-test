import { useState } from 'react'

export const TaskCreator = ({createNewTask}) => {
  const [newTaskname, setNewTaskname] = useState('');

    const handLeSumit = (e) => {
    e.preventDefault();
    createNewTask(newTaskname);
    setNewTaskname('');
  }
    return (
         <form onSubmit={handLeSumit} className='my-2 row'>
         <div className='col-9'>
          <input type="text"
          placeholder='Ingrese su Tarea' 
          value={newTaskname}
          onChange={(e) => setNewTaskname(e.target.value)}
          className='form-control'
        />
         </div>
      <div className='col-3'>
        <button className='btn btn-primary btn-sm'>
        Save Task
      </button>
      </div>
      </form>
    )
}

export default TaskCreator;
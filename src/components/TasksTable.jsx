
import { TasksRow } from './TasksRow';
 export const TasksTable = ({tasks, ToggleTask, showCompleted = false}) => {

  const taskTableRows = (doneValue) => {
    return (
       tasks
       .filter(task => task.done === doneValue)
       .map( task => (
          <TasksRow task={task} key={task.name} ToggleTask={ToggleTask}  />      
      ))
    )
  }

    return(
         <table className='table table-dark table-striped table-bordered border-secondary '>
          <thead>
            <tr className='table-primary'>
              <th>Tasks</th>
            </tr>
          </thead>
          <tbody>
              {
               taskTableRows(showCompleted)
              }
          </tbody>
        </table>
    )
 }
 
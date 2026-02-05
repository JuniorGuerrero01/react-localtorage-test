
 export const TasksRow = ({task, ToggleTask}) => {

    
    return (
      <tr>
        <td className="d-flex justify-content-between">
          {task.name}
          <input 
          type="checkbox"
          checked={task.done}
          onChange={() => ToggleTask(task)}
        />
      </td>
    </tr>
    );
};


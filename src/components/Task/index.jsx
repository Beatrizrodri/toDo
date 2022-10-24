import './styles.css';
import { TbTrash } from 'react-icons/tb';

export default function Task({
  task,
  handleToogleTaskIsDone,
  handleDeleteTask,
}) {
  return (
    <div className="task-container">
      <div className="task">
        <input
          type="checkbox"
          id="task-checkbox"
          onClick={() => handleToogleTaskIsDone(task.id)}
        />
        <span className={task.done ? 'text' : 'task-value'}>{task.task}</span>
        <button onClick={() => handleDeleteTask(task.id)}>
          <TbTrash className="icon" />
        </button>
      </div>
    </div>
  );
}

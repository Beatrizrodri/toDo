import './styles.css';
import { TbTrash } from 'react-icons/tb';

export default function Task({ task, onDelete }) {
  function handleDeleteTask() {
    onDelete(tasks => tasks.filter(t => t.id !== task.id));
  }

  return (
    <div className="task-container">
      <div className="task">
        <span className="task-value">{task.task}</span>
        <button onClick={handleDeleteTask}>
          <TbTrash className="icon" />
        </button>
      </div>
    </div>
  );
}

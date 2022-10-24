import { useState } from 'react';
import './styles.css';

export default function AddTask({ handleAddTask }) {
  const [task, setTask] = useState('');

  const createNewTask = () => {
    const newTask = {
      id: new Date().getTime(),
      task,
      done: false,
    };

    setTask('');

    if (newTask.task) {
      handleAddTask(newTask);
    }
  };

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      createNewTask();
    }
  };

  return (
    <div id="content-add-button">
      <input
        type="text"
        placeholder="Digite aqui sua tarefa"
        onChange={event => setTask(event.target.value)}
        value={task}
        onKeyDown={handleKeyDown}
      />
      <button type="submit" onClick={() => createNewTask()}>
        Adicionar
      </button>
    </div>
  );
}

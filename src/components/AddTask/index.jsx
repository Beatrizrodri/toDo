import { useState } from 'react';
import './styles.css';

export default function AddTask({ addTask }) {
  const [task, setTask] = useState('');

  function handleAddTask() {
    const newTask = {
      id: new Date().getTime(),
      task,
    };

    addTask(oldTasks => [...oldTasks, newTask]);
  }

  return (
    <div id="content-add-button">
      <input
        type="text"
        placeholder="Digite aqui sua tarefa"
        onChange={event => setTask(event.target.value)}
        value={task}
      />
      <button type="submit" onClick={handleAddTask}>
        Adicionar
      </button>
    </div>
  );
}

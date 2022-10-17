import Title from '../Title';
import AddTask from '../AddTask';
import './styles.css';
import Task from '../Task';
import { useState } from 'react';

export default function Container() {
  const [tasks, setTasks] = useState([]);

  return (
    <div id="container">
      <div id="content">
        <Title />
        <AddTask addTask={setTasks} />
        {tasks &&
          tasks.map(task => (
            <Task key={task.id} task={task} onDelete={setTasks} />
          ))}
      </div>
    </div>
  );
}

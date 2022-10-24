import Title from '../../../components/Title';
import AddTask from '../../../components/AddTask';
import './styles.css';
import Task from '../../../components/Task';
import { useState } from 'react';

export default function Home() {
  const [tasks, setTasks] = useState([]);

  function handleToogleTaskIsDone(id) {
    const tasksUpdated = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        };
      } else {
        return task;
      }
    });

    setTasks(tasksUpdated);
  }

  function handleDeleteTask(id) {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  }

  function handleAddTask(newTask) {
    if (newTask) {
      setTasks(oldTasks => [...oldTasks, newTask]);
    }
  }

  return (
    <div id="container">
      <div id="content">
        <Title />
        <AddTask handleAddTask={handleAddTask} />

        {tasks &&
          tasks.map(task => (
            <Task
              key={task.id}
              task={task}
              setTasks={setTasks}
              handleToogleTaskIsDone={handleToogleTaskIsDone}
              handleDeleteTask={handleDeleteTask}
            />
          ))}
      </div>
    </div>
  );
}

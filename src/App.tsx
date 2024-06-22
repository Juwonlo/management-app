// App.tsx
import React, { useState, useEffect } from 'react';
import { getAllTasks, saveTasks, Task } from './tasksData';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css'

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const tasksFromLocalStorage = getAllTasks();
    setTasks(tasksFromLocalStorage);
  }, []);

  const addTask = (task: Task): void => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
    saveTasks(newTasks);
  };

  const editTask = (editedTask: Task): void => {
    const updatedTasks = tasks.map((task) =>
      task.id === editedTask.id ? { ...task, ...editedTask } : task
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const deleteTask = (taskId: number): void => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const completeTask = (taskId: number): void => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Task Management Application</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onCompleteTask={completeTask}
        onDeleteTask={deleteTask}
        onEditTask={editTask}
      />
    </div>
  );
};

export default App;

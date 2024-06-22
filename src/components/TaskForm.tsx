// TaskForm.tsx
import React, { useState } from 'react';
import { Task } from '../tasksData';

interface TaskFormProps {
  onAddTask: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!title.trim()) return;
    const newTask: Task = {
      id: Date.now(),
      title,
      dueDate,
      completed: false,
    };
    onAddTask(newTask);
    setTitle('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="task-input"
        required
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="task-input"
      />
      <button type="submit" className="task-button">Add Task</button>
    </form>
  );
};

export default TaskForm;

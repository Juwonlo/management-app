// TaskItem.tsx
import React, { useState } from 'react';
import { Task } from '../tasksData';

interface TaskItemProps {
  task: Task;
  onCompleteTask: (taskId: number) => void;
  onDeleteTask: (taskId: number) => void;
  onEditTask: (editedTask: Task) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onCompleteTask,
  onDeleteTask,
  onEditTask,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEditedTitle(e.target.value);
  };

  const handleEditSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onEditTask({ ...task, title: editedTitle });
    setIsEditing(false);
  };

  return (
    <div className="task-item">
      {isEditing ? (
        <form onSubmit={handleEditSubmit} className="task-edit-form">
          <input
            type="text"
            value={editedTitle}
            onChange={handleEditChange}
            className="task-input"
            required
          />
          <button type="submit" className="task-button">Save</button>
        </form>
      ) : (
        <div className="task-details">
          <span className="task-title">{task.title}</span>
          <span className="task-due-date">{task.dueDate}</span>
          {!task.completed && (
            <div className="task-actions">
              <button onClick={() => setIsEditing(true)} className="edit-button">Edit</button>
              <button onClick={() => onDeleteTask(task.id)} className="delete-button">Delete</button>
              <button onClick={() => onCompleteTask(task.id)} className="complete-button">Complete</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TaskItem;

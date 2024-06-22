// TaskList.tsx
import React from 'react';
import { Task } from '../tasksData';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  onCompleteTask: (taskId: number) => void;
  onDeleteTask: (taskId: number) => void;
  onEditTask: (editedTask: Task) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onCompleteTask,
  onDeleteTask,
  onEditTask,
}) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onCompleteTask={onCompleteTask}
          onDeleteTask={onDeleteTask}
          onEditTask={onEditTask}
        />
      ))}
    </div>
  );
};

export default TaskList;

// tasksData.ts

export interface Task {
    id: number;
    title: string;
    dueDate: string; // Assuming due date is stored as string (YYYY-MM-DD)
    completed: boolean;
  }
  
  const TASKS_KEY = 'task-manager-tasks';
  
  export const getAllTasks = (): Task[] => {
    const tasksJson = localStorage.getItem(TASKS_KEY);
    if (tasksJson) {
      return JSON.parse(tasksJson) as Task[];
    }
    return [];
  };
  
  export const saveTasks = (tasks: Task[]): void => {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  };
  
import * as fs from 'fs';
import type { task } from './taskinterface.js';

export function initializeFile(): void {
  if (!fs.existsSync('tasks.json')) {
    fs.writeFileSync('tasks.json', '[]');
  }
}

export const getTasks = (): task[] => {
  if (!fs.existsSync('tasks.json')) {
    fs.writeFileSync('tasks.json', '[]');
  }
  const data = fs.readFileSync('tasks.json', 'utf-8');
  return JSON.parse(data) as task[];
};

export const addTask = (description: string): void => {
  const tasks = getTasks();
  const newTask: task = {
    id: (tasks[tasks.length - 1]?.id ?? 0) + 1,
    description,
    status: 'to-do',
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  tasks.push(newTask);
  fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 2));
  console.log(`Task added succesfully: ${description}`);
};

export const updateTaskDescription = (id: number, description: string): void => {
  const tasks = getTasks();
  const taskIndex = tasks.findIndex((task) => task.id === id);
  const taskToUpdate = tasks[taskIndex];
  if (taskToUpdate) {
    taskToUpdate.description = description;
    taskToUpdate.updatedAt = new Date();
    fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 2));
    console.log(`Task with ID ${id} updated successfully.`);
  } else {
    console.log(`Task with ID ${id} not found.`);
  }
};

export const updateTaskStatus = (
  id: number,
  status: 'to-do' | 'in-progress' | 'done'
): void => {
  const tasks = getTasks();
  const taskIndex = tasks.findIndex((task) => task.id === id);
  const taskToUpdate = tasks[taskIndex];
  if (taskToUpdate) {
    taskToUpdate.status = status;
    taskToUpdate.updatedAt = new Date();
    fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 2));
    console.log(`Task with ID ${id} updated successfully.`);
  } else {
    console.log(`Task with ID ${id} not found.`);
  }
};

export const deleteTask = (id: number): void => {
  const tasks = getTasks();
  const updatedTasks = tasks.filter((task) => task.id !== id);
  fs.writeFileSync('tasks.json', JSON.stringify(updatedTasks, null, 2));
  console.log(`Task with ID ${id} deleted successfully.`);
};

export const filterTasks = (status: 'to-do' | 'in-progress' | 'done'): void => {
  const tasks = getTasks();
  const filteredTasks = tasks.filter((task) => task.status === status);
  if (filteredTasks.length === 0) {
    console.log(`No tasks with status: ${status}`);
  } else {
    console.table(filteredTasks);
  }
};

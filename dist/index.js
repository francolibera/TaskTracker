import { initializeFile, getTasks, addTask, updateTaskDescription, updateTaskStatus, deleteTask, filterTasks } from './taskService.js';
const args = process.argv.slice(2);
const command = args[0];
const description = args[1];
console.log(`Command: ${command}`);
switch (command) {
    case 'init':
        initializeFile();
        break;
    case 'list':
        const tasks = getTasks();
        if (tasks.length === 0) {
            console.log('No tasks found.');
        }
        else {
            console.table(tasks);
        }
        break;
    case 'add':
        if (!description) {
            console.log('Please provide a task description.');
        }
        else {
            addTask(description);
        }
        break;
    case 'update':
        const idToUpdateDescription = Number(args[1]);
        const newDescription = args[2];
        if (!newDescription) {
            console.log('Please provide a task description.');
        }
        else {
            updateTaskDescription(idToUpdateDescription, newDescription);
        }
        break;
    case 'mark-in-progress':
        const idToUpdateStatus = Number(args[1]);
        const newStatus = 'in-progress';
        if (!newStatus) {
            console.log('Please provide a task status.');
        }
        else {
            updateTaskStatus(idToUpdateStatus, newStatus);
        }
        break;
    case 'mark-done':
        const idToUpdateStatusDone = Number(args[1]);
        const newStatusDone = 'done';
        if (!newStatusDone) {
            console.log('Please provide a task status.');
        }
        else {
            updateTaskStatus(idToUpdateStatusDone, newStatusDone);
        }
        break;
    case 'delete':
        const idToDelete = Number(args[1]);
        deleteTask(idToDelete);
        break;
    case 'filter':
        const statusToFilter = args[1];
        filterTasks(statusToFilter);
        break;
    default:
        console.log('Unknown command. Available commands: init, list, add, update, mark-in-progress, mark-done, delete, filter');
}
//# sourceMappingURL=index.js.map
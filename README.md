# Task Tracker CLI

A simple command-line interface (CLI) to track your tasks and manage your to-do list. This project is part of the [roadmap.sh](https://roadmap.sh/projects/task-tracker) backend developer path.

Built with **Node.js** and **TypeScript**, using a JSON file (`tasks.json`) for data persistence.

## 🚀 Getting Started

### Prerequisites
- Node.js installed on your machine.

### Installation

1. Clone the repository:
   ```
   git clone [https://github.com/YOUR_USER/task-tracker.git](https://github.com/YOUR_USER/task-tracker.git)
   cd task-tracker
   pnpm install
   # or npm install / yarn install
🛠️ How to Run
You can run the application using the custom script tt. This will build the TypeScript code and execute it in one step.

Select your package manager to see the commands:

Basic Commands
| Action | Command Example |
| :--- | :--- |
| Add a task | `pnpm run tt add "Buy groceries"` |
| List all tasks | `pnpm run tt list` |
| Update a task | `pnpm run tt update 1 "Buy groceries and milk"` |
| Delete a task | `pnpm run tt delete 1` |

Task Status Management
You can change the status of your tasks using their ID:
# Mark as In Progress
pnpm run tt mark-in-progress 1

# Mark as Done
pnpm run tt mark-done 1

Filtering Tasks
List tasks by their current status:
    pnpm run tt list done
    pnpm run tt list to-do
    pnpm run tt list in-progress
    
The application uses a local tasks.json file to store your data.

Note: You don't need to manually create the file. The application is smart enough to check if tasks.json exists; if it doesn't, it will automatically create it when you add your first task. You can also force creation using pnpm run tt init, but it is optional.

Hi this is a Task Tracker, project from roadmaps.sh, made using Node.js and TypeScript. I used fs and json for the data base. Its pretty basic and simple but works!

Use the command pnpm run tt if you use pnpm, npm run tt if you use npm, or yarn tt if you use Yarn and next to it one of the commands! 
 Available commands: init, list, add (description), update(description), mark-in-progress(id), mark-done(id), delete(id), filter('to-do' | 'in-progress' | 'done')

 The init one creates the tasks.json if it doesnt exists! Its kinda useless because if you try to use the other commands like add for example, if you dont have task.json created just its going to create the json anyways and then add the new task that you just sent!
 

# TaskHive
A simple and functional Todo List App built with React and Redux Toolkit, featuring task management, drag-and-drop reordering, LocalStorage persistence, and real-time notifications. Stay organized and track your tasks effortlessly!

📌 Features <br>
✅ Add Tasks – Quickly add new todos to your list.<br>
✅ Edit Tasks – Modify existing tasks easily.<br>
✅ Delete Tasks – Remove completed or unnecessary tasks.<br>
✅ Mark as Complete – Toggle task completion with a checkbox.<br>
✅ Drag & Drop Reordering – Rearrange your tasks for better organization.<br>
✅ Context Menu & Tooltip – Right-click for more actions and smooth user feedback.<br>
✅ Persistent Storage – Your tasks are saved in LocalStorage, so they don’t disappear when you refresh the page.<br>
✅ Notifications – Get success/error messages using React Toastify.

**Clone the Repository** <br>
git clone https://github.com/manishyadav077/TaskHive.git<br>
cd todo-list-app

**Install Dependencies**<br>
npm install

**Start the Development Server**<br>
npm run dev

**Tech Stack**<br>
React – For UI components.<br>
Redux Toolkit – For state management.<br>
LocalStorage – To persist todos.<br>
React Toastify – For notifications.<br>
CSS – For styling and animations.<br>

**Implementation Details**<br>
**State Management**<br>
The app uses Redux Toolkit to manage todos. Actions include:<br>
addTodo() – Adds a new task.<br>
editTodo() – Updates an existing task.<br>
deleteTodo() – Removes a task.<br>
toggleTodo() – Marks a task as complete/incomplete.<br>
reorderTodo() – Updates task order for drag & drop.<br>

**Local Storage**<br>
Todos are stored in LocalStorage, ensuring persistence across page reloads.

**Notifications**<br>
Using React Toastify, the app provides real-time feedback for actions (e.g., success, error messages).

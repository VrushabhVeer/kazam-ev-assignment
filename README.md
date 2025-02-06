# Task Management App 📝

A simple and efficient Task Management application built using the **MERN stack (MongoDB, Express, React, Node.js)** with authentication and task CRUD operations.

## 🚀 Features
- User authentication (Login/Register)
- Create, update, and delete tasks
- Mark tasks as **completed** or **incomplete**
- Pagination (10 tasks per page)
- Toast notifications for user interactions
- Mobile-friendly UI

## 🖼️ Screenshots
(Add screenshots of your frontend here)
- **Task List View**  
  ![Task List](path/to/task-list-screenshot.png)

- **Task Creation Modal**  
  ![Task Creation](path/to/task-creation-screenshot.png)

## 🏗️ Tech Stack
### Frontend:
- React.js with TypeScript
- TailwindCSS for styling
- Axios for API requests
- React Toastify for notifications

### Backend:
- Node.js with Express.js
- MongoDB with Mongoose
- JSON Web Token (JWT) for authentication
- bcrypt.js for password hashing

## 📂 Project Structure
### Frontend:
src/
        ├── App.css
        ├── App.tsx
        ├── index.css
        ├── main.tsx
        ├── vite-env.d.ts
        ├── assets/
        ├── components/
        │   ├── Modal.tsx
        │   └── Navbar.tsx
        ├── pages/
        │   ├── Login.tsx
        │   ├── Signup.tsx
        │   ├── TaskForm.tsx
        │   ├── TaskList.tsx
        │   └── Tasks.tsx
        ├── routes/
        │   ├── ProtectedRoute.tsx
        │   └── routes.tsx
        └── services/
            └── apis.ts

shell
Copy
Edit

### Backend:
/server ├── models # Mongoose models ├── routes # API routes (task & auth) ├── controllers # Business logic ├── middleware # Authentication & error handling ├── server.js # Main server file

bash
Copy
Edit

## 🔧 Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-repo/task-management.git
   cd task-management
Install dependencies:

sh
Copy
Edit
cd frontend
npm install
cd ../backend
npm install
Set up .env files in backend (server)

ini
Copy
Edit
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
Run the backend server:

sh
Copy
Edit
cd backend
npm start
Run the frontend:

sh
Copy
Edit
cd frontend
npm start
Open http://localhost:5173 in your browser.

🔌 API Endpoints
Auth Routes:
POST /api/auth/register - Register a new user
POST /api/auth/login - Login user
Task Routes:
GET /tasks/mytasks?page=1 - Get paginated tasks (10 per page)
POST /tasks/create - Create a new task
PUT /tasks/update/:id - Update a task
DELETE /tasks/delete/:id - Delete a task
PUT /tasks/complete/:id - Mark task as completed/incomplete
📌 Future Enhancements
✅ Drag and drop task reordering
📅 Due date reminders
📊 Task statistics dashboard
🤝 Contributing

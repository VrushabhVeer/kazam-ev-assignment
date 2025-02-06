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
- **Task List View**  
  ![tasklist](https://github.com/user-attachments/assets/a0054282-5b71-4c60-b23b-8d6e38b68a22)

- **Task Creation Modal**  
  ![taskcreation](https://github.com/user-attachments/assets/b7d50727-ce2f-40cc-b4b9-3646f5073f9c)

- **Authentication Pages**
  | Signup page              | Login page              |
  | ---------------------- | ---------------------- |
  | ![signup](https://github.com/user-attachments/assets/9e42a246-6eed-4487-b097-98129438d5aa) | ![login](https://github.com/user-attachments/assets/c2a7fcf8-036d-42a4-ba58-d4ff55195028) |


## 🖥️ Tech Stack
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
```
└── src/
├── App.css
├── App.tsx
├── index.css
├── main.tsx
├── assets/
├── components/
│ ├── Modal.tsx
│ └── Navbar.tsx
├── pages/
│ ├── Login.tsx
│ ├── Signup.tsx
│ ├── TaskForm.tsx
│ ├── TaskList.tsx
│ └── Tasks.tsx
├── routes/
│ ├── ProtectedRoute.tsx
│ └── routes.tsx
└── services/
└── apis.ts
```

### Backend:
```
└── src/
├── index.js
├── config/
│ └── database.js
├── middlewares/
│ └── authentication.js
├── models/
│ ├── task.model.js
│ └── user.model.js
└── routes/
├── task.routes.js
└── user.routes.js
```

## 🔧 Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/VrushabhVeer/kazam-ev-assignment.git
   cd kazam-ev-assignment
   npm install
   ```
   ```sh
   git clone https://github.com/VrushabhVeer/Kazam-ev-backend
   cd Kazam-ev-backend 
   npm install
   ```

2. **Set up .env files in backend (server):**
   ```sh
   MONGO_URI=your_mongodb_connection
   JWT_SECRET=your_secret_key
   ```
   Run the backend server:
   ```sh
   cd Kazam-ev-backend 
   npm run dev
   ```
   Run the frontend server:
   ```sh
   cd Kazam-ev-assignment 
   npm run dev
   Open http://localhost:5173 in your browser.

## 🔌 API Endpoints
   Auth Routes:
   ```sh
   POST /api/auth/register - Register a new user
   POST /api/auth/login - Login user
   ```
   Task Routes:
   ```sh
   GET /tasks/mytasks?page=1 - Get paginated tasks (10 per page)
   POST /tasks/create - Create a new task
   PUT /tasks/update/:id - Update a task
   DELETE /tasks/delete/:id - Delete a task
   PUT /tasks/complete/:id - Mark task as completed/incomplete
   ```
##  📌 Future Enhancements
- Drag and drop task reordering ✅
- Due date reminders 📅
- Task statistics dashboard 📊

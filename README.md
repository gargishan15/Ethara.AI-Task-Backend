# Team Task Manager (Full Stack)

A full-stack web application that allows teams to manage projects, assign tasks, and track progress with role-based access control.

This project was built as part of a company assignment to demonstrate real-world backend and frontend development skills.

---

##  Live Demo

* 🔗 Frontend: https://ethara-ai-task-frontend.vercel.app
* 🔗 Backend API: https://etharaai-task-backend-production.up.railway.app/api

---

## Features

###  Authentication

* User Signup & Login
* JWT-based authentication
* Secure password hashing using bcrypt
* Project & team management
* Task creation, assignment & status tracking(from admin)
* Dashboard (tasks, status, overdue)

###  Role-Based Access

* **Admin**

  * Create projects
  * Add team members
  * Assign tasks
* **Member**

  * View assigned tasks
  * Update task status

### Project Management

* Create and manage projects
* Add team members
* View projects assigned to user

### Task Management

* Create tasks with:

  * Title
  * Description
  * Due date
  * Assigned user
* Update task status:

  * Working
  * In Progress
  * Completed

### Dashboard

* Total tasks
* Completed tasks
* Pending tasks
* Overdue tasks
---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Axios
* React Router
* React Hot Toast

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* Bcrypt (password hashing)

### Deployment

* Backend → Railway
* Frontend → Vercel

---

## Project Structure

```
team-task-manager/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── services/
│   │   └── context/
│   └── package.json
```


## Key Highlights

* Clean and scalable folder structure
* Role-based access control implemented
* Real-time task tracking via Kanban board
* Secure authentication using JWT
* Fully deployed and production-ready

---

## Developer

**Ishan Garg**

---

## Conclusion

This project demonstrates the ability to build a complete full-stack application with authentication, role-based authorization, REST APIs, and a responsive frontend UI.

It reflects real-world application design and deployment practices.

---

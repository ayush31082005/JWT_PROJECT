# 🔐 JWT Authentication Project (Frontend + Backend)

This is a **Full Stack Authentication Project** built using **JWT (JSON Web Token)**. The project includes **Login, Register, and a Protected Profile Page**. Authentication and authorization are handled securely using JWT, and the UI is styled with **Bootstrap**.

---

## 🚀 Features

* User Registration (Signup)
* User Login (Signin)
* JWT-based Authentication
* Protected Routes (Profile Page)
* Logout functionality
* Responsive UI using Bootstrap

---

## 🛠️ Tech Stack

### Frontend

* HTML, CSS, JavaScript
* Bootstrap 5
* Fetch API / Axios
* Protected Routes (JWT stored in localStorage)

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT (jsonwebtoken)
* bcryptjs (Password Hashing)
* CORS

---

## 📁 Project Structure

```
jwt-auth-project/
│
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── profile.html
│   ├── css/
│   └── js/
│
├── backend/
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── auth.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── server.js
│   └── config/
│
└── README.md
```

---

## 🔐 Authentication Flow Diagram

```
User → Login/Register Form
     → Backend API
     → JWT Generated
     → Token Stored (localStorage)
     → Access Protected Profile Page
```

---

## 🧩 Protected Route Flow

```
User requests Profile Page
→ Check JWT Token
→ Valid Token ✅ → Show Profile
→ Invalid / No Token ❌ → Redirect to Login
```

---

## ▶️ How to Run the Project

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

* Open `index.html` using Live Server
* Or open directly in browser

---

## 📌 Important Notes

* JWT is stored in `localStorage`
* Protected routes are secured using middleware (backend)
* Unauthorized users cannot access the profile page

---


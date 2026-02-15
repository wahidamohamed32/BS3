# SwahiliPot Hub Room Booking System

## Overview
The **SwahiliPot Hub Room Booking System** is a web-based frontend application that allows users to create accounts, log in, search available rooms, book rooms, and securely log out.  
The goal of the system is to simplify room reservations within SwahiliPot Hub.

---

## Features

### 1. Signup
Users can create a new account by providing:
- Full Name  
- Email Address  
- Password  

After successful registration, users can proceed to log in.

---

### 2. Login
Registered users can log in using:
- Email  
- Password  

Upon successful authentication, users are redirected to the **Dashboard**.

---

### 3. Search Rooms
Users can search and view available rooms based on:
- Room Name  
- Capacity  
- Availability Date  

The system displays matching available rooms.

---

### 4. Book a Room
Logged-in users can:
- Select a room  
- Choose a booking date  
- Select time (if applicable)  
- Submit the booking request  

After submission:
- Booking confirmation message is displayed  
- Room availability is updated  

---

### 5. Logout
Users can securely log out of the system.  
This:
- Ends the current session  
- Redirects the user back to the login page  

---

## Application Flow
```text
Signup → Login → Dashboard → Search Rooms → Book Room → Logout
```

---

## Full-stack Setup & Run

This repository contains two main folders: `backend/` and `frontend/`.

Prerequisites:
- Node.js (v16+)
- npm 
- MySQL server (local or hosted) — used by the backend via Sequelize

1) Backend (MySQL / Sequelize)

- The backend uses Sequelize with the `mysql2` driver. Connection settings are read from environment variables.
- The Sequelize connection is configured in `backend/config/database.js` with `dialect: 'mysql'`.

- Create a `.env` file in the `backend/` folder with these variables (example):

```
PORT=5000
DB_NAME=swahilipot_db
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_HOST=localhost
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
```

- Steps to prepare MySQL and run the backend:

1. Ensure MySQL is running locally (or create a database in your hosted MySQL server).
2. Create the database named in `DB_NAME` (for example `swahilipot_db`). Example SQL:

```sql
CREATE DATABASE swahilipot_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

3. Install backend dependencies and start the server:

```powershell
cd backend
npm install
npm run dev
```

- The backend uses `sequelize.sync()` on startup (see `backend/server.js`) which will create tables based on models if they don't exist. For production you may prefer migrations instead of `sync()`.

Notes about MySQL usage:
- Dialect & driver: Sequelize is configured with `dialect: 'mysql'` and the `mysql2` npm package provides the driver.
- Character set: If you need specific character sets or collations, configure them in your MySQL database creation step or via Sequelize model/table options.
- Connection options: You can tweak pool settings or logging in `backend/config/database.js`.

2) Frontend (Vite / React)

- The frontend expects the backend API at `http://localhost:5000/api` by default. You can override this with a Vite env variable `VITE_API_URL` in `frontend/.env`:

```
VITE_API_URL=http://localhost:5000/api
```

- Install and run the frontend:

```powershell
cd frontend
npm install
npm run dev
```

3) Seed data

- If the project includes a `seed.js`, run it from the `backend/` directory after the DB is available:

```powershell
cd backend
node seed.js
```

4) Development notes

- Start the backend first so API endpoints are available, then start the frontend.
- The backend uses JWT for auth (set `JWT_SECRET` in `.env`). When users sign up / log in the backend returns a JWT; the frontend should store it and send it in `Authorization: Bearer <token>` for protected endpoints.
- To switch to a different database, update `backend/config/database.js` and the `.env` values accordingly.

5) Troubleshooting

- If Sequelize cannot connect, verify MySQL is running and `.env` values are correct.
- Check `backend` logs (console) for SQL/connection error messages.

---



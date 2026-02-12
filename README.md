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



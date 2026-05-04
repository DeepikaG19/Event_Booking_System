#  Mandabam - Event Booking System

![MERN Stack](https://img.shields.io/badge/Stack-MERN-blue?style=flat&logo=mongodb)
![React](https://img.shields.io/badge/Frontend-React_Vite-cyan?style=flat&logo=react)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?style=flat&logo=nodedotjs)
![Stripe](https://img.shields.io/badge/Payments-Stripe-indigo?style=flat&logo=stripe)

**Mandabam** is a comprehensive Event Management and Venue Booking System designed to streamline the reservation process for marriage halls, banquet spaces, and auditoriums. 

Built with the modern MERN stack, it provides a seamless experience for users to check real-time availability, view venue galleries, and securely pay booking deposits via Stripe. It also equips venue owners with a powerful Admin Dashboard to track reservations, manage availability, and oversee operations effortlessly.

---

## ✨ Key Features

- 🗓️ **Real-time Availability:** Interactive system allowing users to instantly check open dates before booking.
- 💳 **Secure Online Payments:** Fully integrated with Stripe to handle booking deposits and final payments safely.
- 👥 **Role-Based Access:** Distinct User and Admin portals protected by secure JWT authentication.
- 📸 **Venue Showcase:** Dynamic image gallery to display the event space to prospective clients.
- 📊 **Admin Dashboard:** Centralized hub for venue owners to manage events, block out dates, and view financial records.
- ⚡ **Modern Tech Stack:** Fast, responsive, and scalable architecture utilizing React (Vite), Node.js, Express, and MongoDB.

---

## 🛠️ Tech Stack

### Frontend (Client)
- **React 18** (with Vite for fast bundling)
- **React Router Dom** (for navigation)
- **Axios** (for API requests)
- **Stripe Elements** (for payment UI)

### Backend (Server)
- **Node.js & Express.js** (REST API)
- **MongoDB & Mongoose** (Database)
- **JWT & bcrypt.js** (Authentication & Security)
- **Stripe SDK** (Payment processing)

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas (or Local MongoDB)
- Stripe Account (for payment keys)

### 1. Clone the Repository
```bash
git clone https://github.com/DeepikaG19/Event_Booking_System.git
cd Event_Booking_System
```

### 2. Setup the Backend
```bash
cd server
npm install
```

Create a `.env` file in the `server` directory and add your variables:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

Run the backend server:
```bash
npm run dev
```

### 3. Setup the Frontend
Open a new terminal window:
```bash
cd client
npm install
```

Create a `.env` file in the `client` directory:
```env
VITE_API_URL=http://localhost:5000/api
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

Run the frontend app:
```bash
npm run dev
```

---

## 🔐 Default Admin Credentials

If you are running the project locally with the in-memory database fallback, you can log in to the admin dashboard using the following credentials:
- **Email:** `admin@mandabam.com`
- **Password:** `admin123`

---

## 📬 API Endpoints Overview

| Route | Method | Description | Access |
|---|---|---|---|
| `/api/auth/register` | `POST` | Register a new user | Public |
| `/api/auth/login` | `POST` | Authenticate user & get token | Public |
| `/api/bookings` | `GET/POST` | Get bookings or Create a new booking | User/Admin |
| `/api/stripe-payments` | `POST` | Create Stripe payment intent | User |
| `/api/admin/*` | `GET/POST` | Manage users, availability, and bookings | Admin |

---

## 👤 Author
**Deepika G**
- GitHub: [@DeepikaG19](https://github.com/DeepikaG19)

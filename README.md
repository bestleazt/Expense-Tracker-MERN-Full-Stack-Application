🚀 Core Features

🔐 Authentication system (JWT + bcrypt)

👤 User-based data isolation

➕ Create / Update / Delete transactions

📊 Financial dashboard with charts (Recharts)

📅 Date-based filtering (moment.js)

📁 Export transaction data to Excel (xlsx)

📤 File upload support (multer)

🔔 Real-time UI notifications (react-hot-toast)

😀 Emoji category tagging (emoji-picker-react)

📱 Fully responsive UI (TailwindCSS)

🛠 Tech Stack
Frontend

React 19 (Hooks + Functional Components)

Vite (Build Tool)

React Router DOM

Axios

TailwindCSS

Recharts (Data Visualization)

React Icons

React Hot Toast

Backend

Node.js

Express.js

MongoDB

Mongoose ODM

JWT Authentication

bcryptjs (Password hashing)

dotenv (Environment management)

CORS

Multer (File upload handling)

XLSX (Excel export)

🧠 Backend Architecture

MVC pattern (Routes → Controllers → Models)

Middleware-based authentication

RESTful API design

Protected routes using JWT verification

Environment variable configuration

Modular folder structure for scalability

🔐 Security Implementation

Password hashing using bcryptjs

Token-based authentication (jsonwebtoken)

Protected routes with middleware

User-specific transaction queries (no shared data exposure)

📊 Data Flow Overview

User authenticates and receives JWT token

Frontend stores token securely

Axios attaches token in Authorization header

Backend middleware validates token

MongoDB queries user-scoped data

🎯 Why This Project Matters

This project demonstrates:

End-to-end full-stack development

Authentication & authorization flow

Secure REST API design

Real-world CRUD implementation

Data visualization integration

File handling & data export features

Clean modular backend architecture

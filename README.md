# Personal Blog

A full-stack blogging platform with user authentication, content management, and admin features.

## 📋 Overview

This personal blog application allows users to read blog posts, create accounts, comment on articles, and interact with content. Admins have additional privileges to create and manage posts, monitor user activity, and moderate comments.

## ✨ Features

### User Features
- **Authentication**
  - Email/password registration and login
  - Google OAuth integration
  - Profile management (update profile, change password)
- **Blog Interaction**
  - Read posts by category
  - Comment on posts
  - Like comments
  - Search and filter posts

### Admin Features
- **Content Management**
  - Create, edit, and delete blog posts
  - Rich text editor with image upload
  - Post categorization
- **User Management**
  - View and manage users
  - Delete user accounts
- **Dashboard**
  - Analytics for posts, users, and comments
  - Comment moderation
  - Recent activity tracking

## 🛠️ Technologies Used

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing

### Frontend
- **React** - UI library
- **Redux & Redux Toolkit** - State management
- **Redux Persist** - Persist state
- **React Router** - Routing
- **Tailwind CSS** - Styling
- **Flowbite React** - UI components
- **React Quill** - Rich text editor
- **Firebase** - Google authentication and image storage

## 🚀 Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Firebase account (for Google Auth and image storage)

### Backend Setup
1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/personal-blog.git
   cd personal-blog
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   MONGO=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the client directory
   ```bash
   cd client
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file in the client directory with your Firebase configuration:
   ```
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

## 🏗️ Project Structure

```
personal-blog/
├── api/                 # Backend code
│   ├── controllers/     # Request handlers
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── utils/           # Utility functions
│   └── index.js         # Entry point
├── client/              # Frontend code
│   ├── public/          # Static files
│   ├── src/
│   │   ├── component/   # Reusable components
│   │   ├── pages/       # Page components
│   │   ├── redux/       # Redux store and slices
│   │   ├── App.jsx      # Main component
│   │   └── main.jsx     # Entry point
│   └── index.html       # HTML template
└── package.json         # Project configuration
```

## 🌐 Deployment

This project is configured for deployment on platforms like Heroku, Vercel, or similar services:

```bash
npm run build
```

This command will:
1. Install dependencies for both backend and frontend
2. Build the frontend React application
3. Prepare the application for production deployment

## 💡 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
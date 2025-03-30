# Chat App

A real-time chat application built with a **React** frontend and an **Express.js** backend, featuring **Socket.IO** for real-time communication and **MongoDB** for data storage.

---

## **Features**

- **User Authentication**: Sign up, log in, and log out functionality with JWT-based authentication.
- **Real-Time Messaging**: Send and receive messages instantly using Socket.IO.
- **User Profiles**: Update profile pictures and view account details.
- **Theme Customization**: Choose from multiple themes for a personalized chat interface.
- **Responsive Design**: Fully responsive UI for both desktop and mobile devices.
- **Image Uploads**: Send images in chat and update profile pictures using Cloudinary.

---

## **Tech Stack**

### **Frontend**
- **React**: Component-based UI development.
- **Vite**: Fast development server and build tool.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **DaisyUI**: Tailwind CSS components for UI elements.
- **Zustand**: State management for React.
- **React Router**: Client-side routing.
- **Socket.IO Client**: Real-time communication.

### **Backend**
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing user and message data.
- **Mongoose**: ODM for MongoDB.
- **Socket.IO**: Real-time communication between clients and server.
- **Cloudinary**: Image hosting and management.
- **JWT**: JSON Web Tokens for authentication.

---

## **Project Structure**

### **Frontend**
Located in the `frontend` folder:
- **`src`**: Contains React components, pages, and state management stores.
- **`tailwind.config.js`**: Tailwind CSS configuration.
- **`vite.config.js`**: Vite configuration.

### **Backend**
Located in the `backend` folder:
- **`src`**: Contains routes, controllers, models, and utility functions.
- **`lib`**: Utility modules for database connection, JWT, and Cloudinary.
- **`routes`**: API routes for authentication and messaging.
- **`controllers`**: Business logic for API endpoints.
- **`models`**: Mongoose schemas for users and messages.

---

## **Setup Instructions**

### **Prerequisites**
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- Cloudinary account (for image uploads)

### **1. Clone the Repository**
```bash
git clone https://github.com/your-repo/chat-app.git
cd chat-app
```

### **2. Install Dependencies**
#### Frontend:
```bash
cd frontend
npm install
```

#### Backend:
```bash
cd backend
npm install
```

### **3. Configure Environment Variables**
Create a `.env` file in the `backend/src` folder with the following variables:
```properties
MONGODB_URL=<your_mongodb_connection_string>
PORT=5001
JWT_SECRET=<your_jwt_secret>
CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
CLOUDINARY_API_KEY=<your_cloudinary_api_key>
CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
```

### **4. Run the Application**
#### Backend:
```bash
cd backend
npm run dev
```

#### Frontend:
```bash
cd frontend
npm run dev
```

### **5. Access the Application**
Open your browser and navigate to:
```
http://localhost:5173
```

---

## **API Documentation**
Detailed API documentation is available in the [backend README](./backend/README.md).

---

## **Screenshots**

### **Login Page**
![Login Page](https://via.placeholder.com/800x400)

### **Chat Interface**
![Chat Interface](https://via.placeholder.com/800x400)

---

## **License**
This project is licensed under the MIT License.

# Backend API Documentation

This document provides details about the API endpoints available in the backend of the Chat App.

---

## **Authentication Endpoints**

### **1. POST /api/auth/signup**
- **Description**: Creates a new user account.
- **Request Body**:
  ```json
  {
    "fullName": "John Doe",
    "email": "john.doe@example.com",
    "password": "123456"
  }
  ```
- **Response**:
  - **201**: User created successfully.
  - **400**: Validation error (e.g., missing fields, email already exists).
  - **500**: Internal server error.

---

### **2. POST /api/auth/login**
- **Description**: Logs in a user and generates a JWT token.
- **Request Body**:
  ```json
  {
    "email": "john.doe@example.com",
    "password": "123456"
  }
  ```
- **Response**:
  - **200**: Login successful.
  - **400**: Invalid credentials.
  - **500**: Internal server error.

---

### **3. POST /api/auth/logout**
- **Description**: Logs out the user by clearing the JWT cookie.
- **Response**:
  - **200**: Logout successful.
  - **500**: Internal server error.

---

### **4. PUT /api/auth/update-profile**
- **Description**: Updates the user's profile picture.
- **Headers**: Requires authentication token.
- **Request Body**:
  ```json
  {
    "profilePic": "base64_encoded_image_string"
  }
  ```
- **Response**:
  - **200**: Profile updated successfully.
  - **400**: Missing profile picture.
  - **500**: Internal server error.

---

### **5. GET /api/auth/check**
- **Description**: Checks if the user is authenticated.
- **Headers**: Requires authentication token.
- **Response**:
  - **200**: Returns authenticated user data.
  - **401**: Unauthorized.
  - **500**: Internal server error.

---

## **Message Endpoints**

### **1. GET /api/messages/users**
- **Description**: Retrieves a list of users for the sidebar (excluding the logged-in user).
- **Headers**: Requires authentication token.
- **Response**:
  - **200**: Returns a list of users.
  - **500**: Internal server error.

---

### **2. GET /api/messages/:id**
- **Description**: Retrieves messages between the logged-in user and the specified user.
- **Headers**: Requires authentication token.
- **Path Parameters**:
  - `id`: The ID of the user to chat with.
- **Response**:
  - **200**: Returns a list of messages.
  - **500**: Internal server error.

---

### **3. POST /api/messages/send/:id**
- **Description**: Sends a message to the specified user.
- **Headers**: Requires authentication token.
- **Path Parameters**:
  - `id`: The ID of the recipient user.
- **Request Body**:
  ```json
  {
    "text": "Hello!",
    "image": "base64_encoded_image_string" // Optional
  }
  ```
- **Response**:
  - **201**: Message sent successfully.
  - **500**: Internal server error.

---

## **Error Handling**

- **401 Unauthorized**: Returned when the user is not authenticated.
- **400 Bad Request**: Returned for validation errors or missing required fields.
- **500 Internal Server Error**: Returned for unexpected server errors.

---

## **Notes**

- All endpoints that require authentication must include the JWT token in the cookies.
- For image uploads, the `profilePic` or `image` field should contain a base64-encoded string.


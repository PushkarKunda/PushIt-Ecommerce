# PushIT E-Commerce

A modern, full-stack e-commerce application built with the **MERN stack** (MongoDB, Express, React, Node.js). This project features a responsive UI, secure authentication, product management, and image handling.

## 🚀 Features

*   **Modern UI/UX**: Built with **React 19**, **Tailwind CSS v4**, and **Radix UI** primitives for a polished look and feel.
*   **Authentication**: Secure user authentication using **JWT (JSON Web Tokens)**, HTTP-only cookies, and **Bcrypt** for password hashing.
*   **State Management**: efficient global state management with **Redux Toolkit**.
*   **Database**: robust data modeling with **MongoDB** and **Mongoose**.
*   **Image Uploads**: Integrated with **Cloudinary** and **Multer** for seamless media management.
*   **Routing**: Dynamic client-side routing with **React Router v7**.

## 🛠️ Tech Stack

### Client
*   **React 19** (Vite)
*   **Tailwind CSS v4** & **Tailwind Animate**
*   **Redux Toolkit** & **React Redux**
*   **React Router DOM**
*   **Radix UI** & **Lucide React**
*   **Axios**

### Server
*   **Node.js** & **Express.js**
*   **MongoDB** & **Mongoose**
*   **JWT** & **Cookie Parser**
*   **Cloudinary** & **Multer**
*   **Cors** & **Dotenv**

## 📦 Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone https://github.com/PushkarKunda/PushIt-Ecommerce.git
    cd PushIt-Ecommerce
    ```

2.  **Install Dependencies**

    *Server:*
    ```bash
    cd server
    npm install
    ```

    *Client:*
    ```bash
    cd ../client
    npm install
    ```

3.  **Environment Variables**

    Create a `.env` file in the `server` directory with the following variables:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret
    ```

4.  **Run the Application**

    *Start Backend:*
    ```bash
    # In server directory
    npm run dev
    ```

    *Start Frontend:*
    ```bash
    # In client directory
    npm run dev
    ```

## 📄 License
This project is licensed under the ISC License.

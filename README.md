## 🌐 Live Demo

👉 [https://staynova.onrender.com](https://staynova.onrender.com)

# 🏨 StayNova - Hotel Booking Website

StayNova is a full-stack hotel booking platform that allows users to explore, review, and book hotels with ease. Built with **Node.js**, **Express.js**, **MongoDB**, and **EJS**, it offers a seamless booking experience, user authentication, and an intuitive UI.

---

## 🚀 Features

- 🏠 **User Authentication** (Login, Register, Logout)  
- 🔍 **Search & Filter Hotels**  
- 📝 **Leave Reviews & Ratings**  
- 🖼️ **Image Upload for Listings**  
- 💾 **MongoDB Atlas Integration**  
- ⚡ **Flash Messages for Actions**  
- 🔐 **Session-Based Authentication (Passport.js)**  
- 📃 **Terms & Conditions Page**  
- 🛠️ **Error Handling & Custom Error Pages**  

---

## 💻 Tech Stack

- **Frontend:** EJS, HTML, CSS, Bootstrap  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB Atlas  
- **Authentication:** Passport.js  
- **Templating Engine:** EJS-Mate  
- **Session Management:** express-session, connect-mongo  
- **Others:** dotenv, method-override, connect-flash  

---

## 🌐 MongoDB Atlas Connection
```env
ATLASDB_URL=your_mongodb_atlas_url
```

## 🔐 Session Secret Key
```env
SECRET=your_secret_key
```

## ☁️ Cloudinary Configuration (for Image Uploads)
```env
CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_cloud_api_key
CLOUD_API_SECRET=your_cloud_api_secret
```

## 🗺️ Map API Token (for Location Integration)
```env
MAP_TOKEN=your_map_api_token
```

## ⚙️ Node Environment
```env
NODE_ENV=development
```

---

## 📚 Libraries & Their Purpose

### 🛠️ **Core Dependencies**
- **express** – Web framework for Node.js to build the backend.
  ```bash
  npm install express
  ```
- **mongoose** – Object Data Modeling (ODM) library for MongoDB.
  ```bash
  npm install mongoose
  ```
- **ejs** – Templating engine to render dynamic HTML pages.
  ```bash
  npm install ejs
  ```
- **ejs-mate** – Layouts and partials support for EJS.
  ```bash
  npm install ejs-mate
  ```

### 🔐 **Authentication & Security**
- **passport** – Middleware for user authentication.
  ```bash
  npm install passport
  ```
- **passport-local** – Local strategy for username & password authentication.
  ```bash
  npm install passport-local
  ```
- **express-session** – Session management for user logins.
  ```bash
  npm install express-session
  ```
- **connect-mongo** – Store session data in MongoDB.
  ```bash
  npm install connect-mongo
  ```
- **bcryptjs** – Password hashing for secure storage.
  ```bash
  npm install bcryptjs
  ```
- **express-mongo-sanitize** – Prevent MongoDB operator injection.
  ```bash
  npm install express-mongo-sanitize
  ```
- **helmet** – Secure HTTP headers.
  ```bash
  npm install helmet
  ```

### 📤 **Image & File Handling**
- **multer** – Middleware for handling multipart/form-data (file uploads).
  ```bash
  npm install multer
  ```
- **cloudinary** – Cloud-based image hosting and management.
  ```bash
  npm install cloudinary
  ```
- **multer-storage-cloudinary** – Integrate multer with Cloudinary.
  ```bash
  npm install multer-storage-cloudinary
  ```

### 📡 **APIs & External Services**
- **dotenv** – Load environment variables from a `.env` file.
  ```bash
  npm install dotenv
  ```
- **mapbox-gl** – For map integration (e.g., Hotel locations).
  ```bash
  npm install mapbox-gl
  ```

### ⚡ **Utility Libraries**
- **method-override** – Use HTTP verbs like PUT or DELETE where they’re not supported.
  ```bash
  npm install method-override
  ```
- **connect-flash** – Flash messages for success/error notifications.
  ```bash
  npm install connect-flash
  ```
- **express-validator** – Validate and sanitize user inputs.
  ```bash
  npm install express-validator
  ```

### 🐞 **Error Handling & Security**
- **http-errors** – Create HTTP errors for Express.
  ```bash
  npm install http-errors
  ```
- **express-async-errors** – Simplifies async error handling in Express.
  ```bash
  npm install express-async-errors
  ```

### 🧑‍💻 **Install All Dependencies at Once**
To install all dependencies together, run:

```bash
npm install express mongoose ejs ejs-mate passport passport-local express-session connect-mongo bcryptjs express-mongo-sanitize helmet multer cloudinary multer-storage-cloudinary dotenv mapbox-gl method-override connect-flash express-validator http-errors express-async-errors
```

---

# 📎 For More Info
For more info, visit: https://www.linkedin.com/posts/soumyadip-karan-82559224b_staynova-activity-7299353470128599040-jneQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3YFx0BwXHEsbvWe-gPvLWTxsJN5rbPFoQ

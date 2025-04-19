 Setup Database (MySQL)

### 🛠️ Create the database and tables:

1. Open MySQL terminal or your DB GUI (like phpMyAdmin / MySQL Workbench).
2. Run this SQL to create database and tables:


CREATE DATABASE IF NOT EXISTS gas_app;  //creates the new database

use gas_app;  //active the new database

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  mobile_number VARCHAR(15),
  pin VARCHAR(30),
  role ENUM('Consumer', 'Provider')
  );

CREATE TABLE organizations (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255),
     type VARCHAR(255),
     address VARCHAR(255),
     gst_number VARCHAR(50),
     user_id INT,
     FOREIGN KEY (user_id) REFERENCES users(id)
);

Install Backend Dependencies (Node.js + Express)
------------------------------------------------
cd ../backend
npm install

Run Backend Server
------------------
cd backend
npm start
# BookVault - Library App

# Project Overview
This is a React-based web application, which allows users to search for books, and also add books to their own collection. In the collection, users can toggle the read status and also remove books.
The application gives users the opportunity to find books that they want to read and add them to a collection in case they want to read a specific book or specific books. 

# Features
- Search functionality: Users can search for books, which are retrieved from the Open Library API.
- Add books: Users can add books to their collection.
- Remove books: Users can also remove books from the collection.
- Toggle read status: It is possible to toggle the read status to keep track of which books are read.
- Responsive UI: The application is usable and designed for both desktop and mobile devices.
- Book collection storage: The books are stored in a database.

# Tech stack
# Frontend
- React
- Vite
- Axios
- Tailwind.css
- JavaScript

  # Backend
  - Node.js
  - MongoDB Atlas
  - Express.js
  - Mongoose


# Getting started
Prerequisites
Before you begin, ensure that you have the following installed on your machine:
- Node.js (v14 or higher)
- npm or yarn

# Installation
1. Clone the repository
   git clone https://github.com/NicoleCoding/BookVault.git
2.  Navigate to the directory
   cd BookVault
3. Install the dependencies
   There are two directories in this project - one for backend and one for the frontend. You need to install dependencies for both.
 # For the backend:
cd Backend
npm install
 # For the frontend:
 cd ../Frontend
 npm install
4. Set up the database (MongoDB)
In this project MongoDB Atlas is being used, so be sure to have that set up. Update your .env file in the backend with your connection string.
MONGO_URI=your_mongodb_connection_string
5. Running the application
You will need to run the backend and frontend in the same time.
 # Running the backend:
 Navigate to the Backend directory and run:
 npm start
 # Running the frontend:
 Then navigate to the Frontend directory and run:
 npm run dev
 6. Accessing the application
 The backend will be running on: http://localhost:5000/api/books
 The frontend is running on: http://http://localhost:5173

 Note that these instructions are for npm. If you are using yarn, you can replace "npm" with "yarn".

# Usage
- Search for books: You can search the books on the search page by typing in the whole title or part of the title
- Manage your book collection: You can add and remove books on the collection page. You can also change the read status.

Note that the application is work in progress and future enhancements will be made!

# Acknowledgements
- React - A library for creating user interfaces (https://react.dev/)
- Open Library API - Provides the book data (https://openlibrary.org/developers/api)







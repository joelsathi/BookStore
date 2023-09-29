# Book Store - MERN Full Stack Project

## Description

This project is a simple web application to manage a book store. It is a full stack project using the MERN stack (MongoDB, Express, React, Node.js). 

The functionalities developed are:
- List all books
- Add a new book
- Edit a book
- Delete a book

Future Improvements 
- Search book by title
- Login and authentication
- Authorization
- Pagination
- REST API

## Installation & Setup

Install the required packages in the backend folder.

```bash
$ cd backend
```

```bash
$ npm install
```

Install the required packages in the frontend folder.
```bash
$ cd frontend
```

```bash
$ npm install
```

In the backend folder, there is a sampleConfig.js file. Create a new file named config.js and copy the content of sampleConfig.js to config.js. Replace the MongoDB connection string with your own connection string.

```bash
export const mongoDBURL =
  "mongodb+srv://<user_name>:<password>@book-store-db.chncoxg.mongodb.net/books-collection?retryWrites=true&w=majority";
```

## Running the app

To run the app, run the following command in the backend folder.

```bash
$ npm run dev
```

To run the app, run the following command in the frontend folder.

```bash
$ npm run dev
```

## Credits to the following resources

- [MERN Stack Tutorial - Book Store Project](https://youtu.be/-42K44A1oMA?si=FdTZ24SPyRmCK7sf)
- [Book-Store-MERN-FullStack](https://github.com/mohammad-taheri1/Book-Store-MERN-Stack)
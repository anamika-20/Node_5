// app.js
import express from "express";
import urlencoded from "body-parser";
const app = express();
const port = 3000;
// import { db } from "./db.js";
// const db = require("./db.js");
// Importing routes
import indexRoute from "./routes/index.js";
import userRoute from "./routes/users.js";
import createRoute from "./routes/create.js";
import notFoundRoute from "./routes/notFound.js";
import mysql from "mysql2";
// Middleware
app.use(urlencoded({ extended: true }));

// Create a connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node_assignment_5",
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL Connected...");
});

// Routes
app.use("/", indexRoute);
app.use("/users", userRoute);
app.use("/create", createRoute);
app.use(notFoundRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

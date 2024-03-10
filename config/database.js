import { createConnection } from "mysql2/promise";

const db = await createConnection({
  host: "localhost",
  user: "root",
  password: "ANA@20mika",
  database: "node5",
});

// For testing on your pc one might want to use your own connection and database, we can do it by this way
// const db = await createConnection({
//   host: "localhost",
//   user: "your_mysql_username",
//   password: "your_mysql_password",
//   database: "your_database_name",
// });

//Also one might need to manuually create the table in order to insert data into the database, we can do it by this way
// CREATE TABLE users (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(255) NOT NULL
//   );

console.log("Connected to MySQL database");

export default db;

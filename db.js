import { createPool } from "mysql2";

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "ANA@20mika",
  database: "node5",
});

export default pool.promise();

// const connection = createConnection(dbConfig);

// const dbConfig = {
//   host: "localhost",
//   user: "root",
//   password: "ANA@20mika",
//   database: "node5",
//   //   host: "127.0.0.1",
// };
// connection.connect((err) => {
//   if (err) {
//     console.error("Error connecting to database:", err);
//     return;
//   }
//   console.log("Connected to database");
// });

// export default connection;

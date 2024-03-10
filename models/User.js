import db from "../config/database.js";

const addUser = async (userName) => {
  try {
    await db.query("INSERT INTO users (name) VALUES (?)", [userName]);
    console.log("User added");
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
};

const getUsers = async () => {
  try {
    const [rows] = await db.query("SELECT * FROM users");
    return rows;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export { addUser, getUsers };

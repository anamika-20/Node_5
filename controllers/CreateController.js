// controllers/CreateController.js

import * as UserModel from "../models/User.js";

const index = (req, res) => {
  res.send(`
    <form action="/add" method="post">
      <label for="userName">User Name:</label>
      <input type="text" id="userName" name="userName" required>
      <button type="submit">Submit</button>
    </form>
  `);
};

const add = async (req, res) => {
  const { userName } = req.body;
  try {
    await UserModel.addUser(userName);
    res.redirect("/users");
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).send("Internal Server Error");
  }
};

export { index, add };

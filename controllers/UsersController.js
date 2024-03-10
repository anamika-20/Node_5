import * as UserModel from "../models/User.js";

const index = async (req, res) => {
  try {
    const users = await UserModel.getUsers();
    res.render("users", { users });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};

export { index };

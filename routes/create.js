// routes/create.js
import { Router } from "express";
const router = Router();
// import { query } from "../db.js";

router.get("/", (req, res) => {
  res.send(
    '<form action="/add" method="post"><input type="text" name="userName" /><button type="submit">Submit</button></form>'
  );
});

router.post("/add", (req, res) => {
  const userName = req.body.userName;
  if (!userName) {
    res.status(400).send("Bad Request");
    return;
  }

  query("INSERT INTO users (name) VALUES (?)", [userName], (err, results) => {
    if (err) {
      res.status(500).send("Internal Server Error");
      return;
    }

    res.redirect("/users");
  });
});

export default router;

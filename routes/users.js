// routes/users.js
import { Router } from "express";
const router = Router();
// import { query } from "../db.js";

router.get("/", (req, res) => {
  query("SELECT * FROM users", (err, results) => {
    if (err) {
      res.status(500).send("Internal Server Error");
      return;
    }

    if (results.length === 0) {
      res.send("No users found");
    } else {
      res.json(results);
    }
  });
});

export default router;

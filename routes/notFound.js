// routes/notFound.js
import { Router } from "express";
const router = Router();

router.use((req, res) => {
  res.status(404).send("404 Page Not Found");
});

export default router;

import express from "express";
import bodyParser from "body-parser";
import path from "path";

import * as HomeController from "./controllers/HomeController.js";
import * as UsersController from "./controllers/UsersController.js";
import * as CreateController from "./controllers/CreateController.js";
import * as NotFoundController from "./controllers/NotFoundController.js";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Routes for controllers
app.get("/", HomeController.index);
app.get("/users", UsersController.index);
app.get("/create", CreateController.index);
app.post("/add", CreateController.add);
app.use(NotFoundController.index);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

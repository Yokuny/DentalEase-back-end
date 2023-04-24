import { Router } from "express";
import data from "../middlewares/data.middleware.js";
import loginRoute from "../controllers/login.controller.js";
import registerRoute from "../controllers/register.controller.js";
import loginSchema from "../schemas/login.schema.js";
import registerSchema from "../schemas/register.schema.js";

const login = Router();

login.post("/login", data(loginSchema), loginRoute);
login.post("/register", data(registerSchema), registerRoute);

export default login;

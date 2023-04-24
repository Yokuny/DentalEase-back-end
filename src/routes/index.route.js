import { Router } from "express";
import login from "./login.route.js";
import record from "./record.route.js";

const router = Router();

router.use(login);
router.use(record);

export default router;

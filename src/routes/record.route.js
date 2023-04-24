import { Router } from "express";
import data from "../middlewares/data.middleware.js";
import recordSchema from "../schemas/record.schema.js";
import { postRecord, getRecord } from "../controllers/record.controller.js";
const record = Router();

record.post("/record", data(recordSchema), postRecord);
record.get("/record", getRecord);
export default record;

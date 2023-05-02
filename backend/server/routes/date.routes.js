import { Router } from "express";
import { getDate, createDate } from "../controllers/date.controller.js";

const router = Router();

router.get("/", getDate);
router.post("/", createDate);

export default router;

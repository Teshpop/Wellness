import { Router } from "express";
import { createDate } from "../controllers/date.controller.js";

const router = Router();

router.post("/", createDate);

export default router;

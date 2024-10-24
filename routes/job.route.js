import express from "express";
import { postJobs, getJobs } from "../controllers/job.controller.js";

const router = express.Router();

router.post("/save", postJobs);
router.get("/get", getJobs);

export default router;

import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { postjob, getAdminJobs, getJob, getJobById } from "../controllers/job.controller.js";

const router = express.Router();



router.route("/post").post(isAuthenticated,postjob);
router.route("/get").get(isAuthenticated,getJob);
router.route("/get/:id").get(isAuthenticated,getJobById);
router.route("/getAdmin/:id").get(isAuthenticated,getAdminJobs );

export default router;
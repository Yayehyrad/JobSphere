import { Router} from "express";
import isAuthenticated from "middleware/auth";
import { getAdminJobs, getAllJobs, getJobById, postJob } from "./job.controller";

const jobRouter = Router()

jobRouter.post('/' , isAuthenticated , postJob)
jobRouter.get('/' , isAuthenticated, getAllJobs)
jobRouter.get('/getAdminJobs' , isAuthenticated , getAdminJobs)
jobRouter.get('/:id' , isAuthenticated , getJobById)


export default jobRouter
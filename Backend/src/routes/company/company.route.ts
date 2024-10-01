import { Router } from "express";
import { getCompany, getCompanyById, registerCompany, updateCompany } from "./company.controller";
import isAuthenticated from "../../middleware/auth";

const companyRouter = Router()

companyRouter.post("/register" , isAuthenticated , registerCompany)
companyRouter.get('/companies' , isAuthenticated , getCompany)
companyRouter.patch('/companies/:id' , isAuthenticated , updateCompany)
companyRouter.get('/companies/:id' , isAuthenticated , getCompanyById )


export default companyRouter
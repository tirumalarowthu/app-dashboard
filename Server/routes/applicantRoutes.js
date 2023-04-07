const express=require("express")
const addApplicant = require("../controllers/applicantControlls")
const applicantRoutes=express.Router()



applicantRoutes.post("/applicant/add",addApplicant)

module.exports=applicantRoutes
const asyncHandler = require("express-async-handler")
const Applicant = require("../models/applicant")
/*************add applicant  **************/
const addApplicant = asyncHandler(async (req, res) => {
    const { name, email, mobile, role, status, qualification, passout, collegeName, resumeLink,experience } = req.body

    if (!name, !email, !mobile, !role, !status, !qualification, !passout, collegeName, !resumeLink, !experience){
        throw new Error("All feilds are required")
    }

    const applicantExits=await Applicant.findOne({email})
    if(applicantExits){
        throw new Error("Applicant already Exits/please Enter new applicant")
    }
    const newApplicant =await Applicant.create(req.body)
    if(newApplicant){
        res.json(newApplicant)
    }else{
        throw new Error("Unable to Create applicant! please try after some time")
    }

})
module.exports = addApplicant
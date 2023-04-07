const express=require("express")
const { auth, registerAdmin } = require("../controllers/adminControlls")
const adminRoutes=express.Router()
adminRoutes.post("/admin/login",auth)

adminRoutes.post("/admin/register",registerAdmin)

module.exports=adminRoutes
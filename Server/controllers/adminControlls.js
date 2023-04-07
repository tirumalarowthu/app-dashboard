const asyncHandler = require("express-async-handler")
const Admin = require("../models/admin")
const generateToken = require("../config/generateToken")

/////*****admin registration*********/////
const registerAdmin = asyncHandler(async (req, res) => {
    const { name, email, password, pic, role } = req.body
    if (!name, !email, !password, !role) {
        throw new Error("Enter All Feilds")
    }
    if (password.length < 6) {
        res.status(400);
        throw new Error('Password must be at least 6 characters long');
    }
    const adminExits = await Admin.findOne({ email })

    if (adminExits) {
        res.status(400)
        throw new Error("User Already Exits")
    }
    const admin = await Admin.create(
        {
            name,
            email,
            role,
            password,
            pic
        }
    )
    if (admin) {
        res.status(201).json({
            _id: admin._id,
            name: admin.name,
            email: admin.email,
            role: admin.role,
            pic: admin.pic,
            token: generateToken(admin._id),
        })
    } else {
        res.status(400);
        throw new Error("Admin not found/Unable to create Admin")
    }

})


// auth admin (login)
const auth = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        throw new Error("Enter all feilds")
    }

    const admin = await Admin.findOne({ email })
    if (admin && (await admin.matchPassword(password))) {
        res.json({
            _id: admin._id,
            name: admin.name,
            email: admin.email,
            role: admin.role,
            pic: admin.pic,
            token: generateToken(admin._id)
        })
    } else {
        res.status(401)
        throw new Error("Invalid email or password")
    }

})


module.exports = { registerAdmin, auth }




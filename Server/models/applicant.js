const mongoose = require("mongoose")
const applicantSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    mobile: {
        type: Number,
        require: true
    },
    role: {
        type: String,
        require: true
    },
    experience: {
        type: Number,
        require: true
    },
    status: {
        type: String,
        require: true
    },
    qualification: {
        type: String,
        require: true
    },
    passout: {
        type: Number,
        require: true
    },
    collegeName: {
        type: String,
        require: true
    },
    resumeLink: {
        type: String,
        require: true
    }
})

const Applicant = mongoose.model("Applicant", applicantSchema)
module.exports = Applicant




























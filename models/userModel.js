const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    role:{
        type:Number,
        default: 0 
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter your password!"]
    },
    company: {
        type: String,
        default: ""
    },
    phoneno: {
        type: Number,
        default: ""
    },
    avatar: {
        type: String,
        default: "https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png"
    },
    isAdmin:{
        type: Number,
        default:0
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("Users", userSchema)
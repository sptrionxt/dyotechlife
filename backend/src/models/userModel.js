const mongoose = require("mongoose");
const validator = require("validator");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const dotenv = require("dotenv");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please Enter Your Name"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [4, "Name should have more than 4 characters"]

    },
    email: {
        type: String,
        required: [true, "Pleases enter your email"],
        unique: true,
        validator: [validator.isEmail, "Please enter valid email"]
    },
    password: {
        type: String,
        required: [true, "Pleases enter your password"],
        minLength: [8, "Password should have more than 8 characters"],
        select: false
    },
    avatar: {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    role: {
        type: String,
        default: "user",
    },

    createdAt:{
        type:Date,
        default:Date.now,
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date,
});

userSchema.pre("save", async function (next) {

    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcryptjs.hash(this.password, 10)
})


//JWT token

userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    })
}

// compare password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcryptjs.compare(enteredPassword, this.password);
}

// generating password reset token

userSchema.methods.getResetPasswordToken = function () {

    // generating token

    const resetToken = crypto.randomBytes(20).toString("hex");

    // hashing and add to userSchema
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");

    this.resetPasswordExpire = Date.now() + 15*60*1000;

    return resetToken;
}



module.exports = mongoose.model("User", userSchema);
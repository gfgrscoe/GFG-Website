// routes/authRoutes.js
import express from "express";
import User from "../models/user.js";
import { createtokenforuser } from "../services/auth.js";

const userrouter = express.Router();

// SIGNUP
userrouter.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existing = await User.findOne({ email });
        if (existing) {
            return res.status(400).json({ message: "User already exists" });
        }

        const user = new User({ name, email, password });
        await user.save();

        const token = createtokenforuser(user);

        return res.json({
            success: true,
            message: "User Registered Successfully",
            token,
        });
    } catch (err) {
        console.error("Signup error:", err);
        res.status(500).json({ message: "Signup failed" });
    }
});

// LOGIN
userrouter.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const token = await User.matchPassword(email, password);

        res.json({ success: true, message: "Login successful", token });
    } catch (err) {
        console.error("Login error:", err.message);
        res.status(401).json({ message: "Invalid email or password" });
    }
});



export default userrouter;

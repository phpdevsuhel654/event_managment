const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require('../models/user');

// Register
const register = async (req, res) => {
    //console.log(req.body);
    try {
        const { name, email, password } = req.body;

        const user = await User.findOne({ email });
        if (user) return res.status(404).json({ message: "User already exists. Please try with different email address." });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully"});
    } catch(err) {
        //console.log("Error...", error);
        res.status(500).json({
            error: err.message
        });
    }
};

// Login
const login = async (req, res) => {
    //console.log(req.body);
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

        res.status(200).json({ token, user: { id: user._id, name: user.name, email: user.email } });
    } catch (error) {
        //console.log("Error...", error);
        res.status(500).json({
            error: err.message
        });
    }
};

module.exports = {
    register,
    login
}
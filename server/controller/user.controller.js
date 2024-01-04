const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
const { userModel } = require("../models/user.model")


const register = async(req, res) =>{
    try{
        const { name, avatar, email, password } = req.body
        const hashPass = await bcrypt.hash(password, 10)
        const newUser = new userModel({
            name,
            avatar,
            email,
            password: hashPass
        })
        await newUser.save()
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    }catch(err){
        res.status(400).json({ error: err.message });
    }
}

const login = async(req, res) =>{
    try{
        const {email, password} = req.body
        const user = await userModel.findOne({email})
        if(!user){
            res.status(401).json({ message: 'User not found' })
        }
        const passMatch = await bcrypt.compare(password, user.password)
        if(!passMatch){
            res.status(401).json({ message: 'Invalid credentials' })
        }
        const token = jwt.sign({ userId: user._id, email: user.email }, 'nyka', { expiresIn: '1h' });
        res.cookie("authToken", token, { httpOnly: true, secure: true, maxAge: 3600000 });
        res.status(200).json({ message: 'Login successful', token: token});
    }catch(err){
        res.status(400).json({ error: err.message });
    }
}

const logout = async(req, res) =>{
    try{
        await res.clearCookie('authToken');
        res.status(200).json({ message: 'Logout successful'});
    }catch(err){
        res.status(400).json({ error: err.message });
    }
}

module.exports={register, login, logout}
const express = require("express");
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    try {
        jwt.verify(token, 'nyka', async (err, decoded) => {
            if (decoded) {
                req.body.userId = decoded.userId;
                next();
            } else {
                res.status(401).josn({message:"Unauthorized User"});
            }
        });
    } catch (err) {
        res.status(400).json({error:err.message});
    }
};

module.exports = { auth };

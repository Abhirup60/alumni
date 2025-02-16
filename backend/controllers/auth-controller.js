// this is my contoller.js. Basically it handles diff pages

const User = require("../models/user-model");
const Service = require("../models/service-model");
const bcrypt = require("bcrypt");

const home = async(req,res)=>{
    try {
        res.status(200).send("this is home page of the alumni site");
    } catch (error) {
        res.status(400).send({msg:"page not found"});
    }
}

const about = async(req,res)=>{
    try {
        res.status(200).send("this is about page of the alumni site");
    } catch (error) {
        res.status(400).send({msg:"page not found"});
    }
}

const register = async(req,res,next)=>{
    try {
        console.log(req.body);
        const {username, email, phone, password} = req.body;

        const emailExist = await User.findOne({email: email});
        
        if(emailExist){
            return res.status(400).json({message: "Email already exist"});
        }

        const saltRound = 10;
        const hash_password = await bcrypt.hash(password, saltRound);

        const userCreated = await User.create({username, email, phone, password:hash_password});
        res.status(201).json({
            message:"registration successful",
            token: await userCreated.generateToken(),
            userId:userCreated._id.toString(),
        });
        
    } catch (error) {
        res.status(400).send({msg:"interval server error"});
    }
}

// login functionalities
const login = async(req,res)=>{
    try {
        const {email, password} = req.body;
        console.log(req.body);

        const userExist = await User.findOne({email});
        if(!userExist){
            res.status(400).json({message: "user does not exist"});
        } 

        const user = await bcrypt.compare(password, userExist.password);

        if(user){
            res.status(200).json({
                message:"Login successful",
                token: await userExist.generateToken(),
                userId:userExist._id.toString(),
            })
        }else{
             res.status(400).json({message:"invalid email or password"});
        }
    } catch (error) {
         res.status(500).json({msg:"interval server error"});
    }
}

// user function to get the data
const user = async(req,res)=>{
    try {
        const userData = req.user;
        console.log("userdata auth-controller: ",userData);
        res.status(200).json({userData});
    } catch (error) {
        console.error(error);
        res.status(400).json({msg:"user error"});
    }
}

// service backend logic
const service = async(req,res)=>{
    try {
        const serviceData = await Service.find();
        console.log("service data from database: ",serviceData);
        return res.status(200).json({ serviceData});
    } catch (error) {
        console.log("fetching problem...");
        return res.status(400).json({msg:"fetching problem is occur"});
    }
}

module.exports = {home, about,  register, login, user, service};
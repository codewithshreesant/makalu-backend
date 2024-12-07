const transferMaill = require("../helpers/gmail");
const authModel = require("../models/authModels");
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

class Authorization {
    async signUp(req, res){
        try {
            const {username, email, password}=req.body;

            const ExistUser=await authModel.find({email});
            console.log("exist user ",ExistUser)

            if(ExistUser > 0){
                res.status(402).json({
                    "error": "user already exist "
                })
                
            }


            const hashPassword=await bcrypt.hash(password, 10);

            const newUser=await authModel.create({
                username,
                email,
                password: hashPassword
            })

            const saveUser=await newUser.save();

            console.log("Save User ", saveUser);
            transferMaill({email: saveUser.email, emailType:"VERIFY EMAIL", userId: saveUser._id})

            res.status(200).json({
                "message ": "User registered successfully"
            })
            
        } catch (error) {
            res.status(404).json({
                "error": error.message
            })
        }
    }

    async Login(req,res){
        try {
            const {email, password}=req.body;

            const ExistUser=await authModel.find({email});

            if(ExistUser <= 0)
            {
                return res.status(401).json({
                    "error": "No user Available "
                })
            }
            const token=jwt.sign({_id: ExistUser[0]._id, email: ExistUser[0].email}, process.env.JWT_SECRET_KEY, {expiresIn: "1d"});
            res.status(200).json({
                "message": "User Logged in successfully ",
                "token": token
            })

        } catch (error) {
            res.status(404).json({
                "error": error.message
            })
        }
    }
}

let Authorize=new Authorization();

module.exports=Authorize;
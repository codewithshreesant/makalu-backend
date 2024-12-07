
const nodemailer=require('nodemailer');
const bcrypt=require('bcryptjs');
const authModel = require('../models/authModels');
const transferMaill=async ({email, emailType, userId})=>{

    const verifyToken=await bcrypt.hash(userId.toString(), 10);

    if(emailType === "VERIFY EMAIL"){
        const saveToken=await authModel.findByIdAndUpdate({_id:userId},{verifyToken: verifyToken, verifyTokenExpiry: Date.now()+2*24*60*60*1000})
    }else if(emailType === "RESET PASSWORD"){
        const saveResetToken=await authModel.findByIdAndUpdate({_id:userId},{forgotPasswordToken: verifyToken, forgotPasswordTokenExpiry: Date.now()+2*24*60*60*1000})
    }

    const createTransports=nodemailer.createTransport({
        'service':'gmail',

        auth:{
            user:"shreesantadhikari4590@gmail.com",
            pass:'fpjjtxgypiovsied'
        }
    })

    const authDetails={
        from:'shreesantadhikari4590@gmail.com',
        to:email,
        subject:emailType === "VERIFY EMAIL" ? "verify your email" : "reset Password",
        body:"<h1>let's go</h1>"
    }

    createTransports.sendMail(authDetails, (err, info)=>{
        if(err)
        {
            console.log("Error occured while Sending mail ");
        }else{
            console.log("Email sent successfully ");
        }
    })
    
}

module.exports=transferMaill;
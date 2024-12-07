const mongoose=require('mongoose')

const authSchema=new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    verifyToken:{
        type: String
    },
    verifyTokenExpiry:Date,
    forgotPasswordToken:{
        type: String
    },
    forgotPasswordTokenExpiry:Date,   
},
    {
        timestamps: true
    }
)

const authModel=mongoose.model('authModel', authSchema);

module.exports=authModel;
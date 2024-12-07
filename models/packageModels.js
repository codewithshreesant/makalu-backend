const mongoose=require('mongoose')

const packageSchema=new mongoose.Schema({
    placeName:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    coverImage:{
        type: String,
        required: true
    }
},
{
    timestamps: true
}
);

const packageModel=mongoose.model('packageModel', packageSchema);

module.exports=packageModel;
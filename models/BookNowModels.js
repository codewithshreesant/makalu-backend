
const mongoose=require('mongoose');

const BookNowSchema=new mongoose.Schema({
    tripname:{
        type: String,
        required: true
    },
    Adults:{
        type: Number,
        required: true
    },
    Children:{
        type: Number,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    ArrivalDate:{
        type: Date,
        required: true
    },
    DepartureDate:{
        type: Date,
        required: true
    },
    fullname:{
        type: String,
        required: true

    },
    email:{
        type: String,
        required: true
    },
    contact:{
        type: Number,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    message:{
        type: String
    }
})

const BookNowModel=mongoose.model('BookNowModel', BookNowSchema);

module.exports=BookNowModel;
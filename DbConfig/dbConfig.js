
const mongoose=require('mongoose');

const Connect=async ()=>{
    try{
        await mongoose.connect(process.env.DATABASE_URI);
        console.log("Database connected successfully ");
    }catch(error){
        console.log(error.message);
    }
}

module.exports=Connect;
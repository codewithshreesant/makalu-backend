const SendBookNow = require("../helpers/BookNowEmail");
const BookNowModel = require("../models/BookNowModels");

const BookNowController=async (req,res)=>{
    try {
        console.log(req.body);
        const {tripname, Children, Adults, ArrivalDate, DepartureDate, fullname, email, contact, country, address, message}=req.body;

        const ExistPackage=await BookNowModel.find({email});

        if(ExistPackage.length > 0)
        {
            return res.status(402).json({
                "error": "You already book a same package "
            })
        }

        const newArrivalDate=new Date(ArrivalDate);
        const newDepartureDate=new Date(DepartureDate);

        const user=await BookNowModel.create({
            tripname,
            Adults:Number(Adults),
            Children:Number(Children),
            ArrivalDate: newArrivalDate,
            DepartureDate: newDepartureDate,
            fullname,
            email,
            contact,
            address,
            country,
            address,
            message
        })

        const saveUser=await user.save();

        console.log("saveUser for book now ", saveUser);

        await SendBookNow(saveUser);

        res.status(200).send({
            "message": "Package Booked Successfully "
        })

    } catch (error) {
        console.log(error.message);
    }
}


module.exports=BookNowController;
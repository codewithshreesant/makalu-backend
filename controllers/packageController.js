const packageModel = require("../models/packageModels");


class Package{
    async createPackage(req, res){
        try {
            const {placeName, description, price, coverImage}=req.body;

            const ExistPlace=await packageModel.find({placeName});
            if(ExistPlace.length > 0){
                return res.status(402).json({
                    "message": "Place Already Available "
                })
            }
            const place=await packageModel.create({
                placeName,
                description,
                price,
                coverImage
            })

            const savePlace=place.save();

            res.status(200).json({
                "message": "Package created Successfully ",
                "places": savePlace
            })

        } catch (error) {
            res.status(404).json({
                "error": error.message
            })
        }
    }

    async getAllPackages(req, res){
        try{
            const allPackages=await packageModel.find({});
            if(!allPackages){
                return res.status(402).json({
                    "error": "No packages available"
                })
            }

            res.status(200).json({
                places: allPackages
            })
        }catch(error){
            res.status(402).json({
                "error": error.message
            })
        }
    }

    async getSinglePackage(req, res){
        try {
            const {id}=req.params;
            const getPackage=await packageModel.findById({_id: id});
            if(!getPackage)
            {
                return res.status(401).json({
                    "error": "No package found"
                })
            }

            res.status(200).json({
                "message": "package found",
                package: getPackage
            })
        } catch (error) {
            res.status(404).json({
                "error": error.message
            })
        }
    }

    async updatePackage(req, res){
        try {
            const {id}=req.params;
            const updatedPackage=await packageModel.findByIdAndUpdate({_id: id}, req.body);
            if(!updatedPackage){
                return res.status(402).json({
                    "error": "no updated packages"
                })
            }
            res.status(200).json({
                "message":"Package updated successfully ",
                package: updatedPackage
            })
        } catch (error) {
            res.status(404).json({
                "error": error.message
            })
        }
    }

    async deletePackage(req,res){
        try {
            const {id}=req.params;
            const deletePackage=await packageModel.findByIdAndDelete({_id: id});
            if(!deletePackage)
            {
                return res.status(402).json({
                    "error": "error occured while deleting "
                })
            }

            res.status(200).json({
                "message": "Package deleted successfully "
            })
        } catch (error) {
            res.status(404).json({
                "error": error.message
            })
        }
    }
}

let package=new Package();

module.exports=package;

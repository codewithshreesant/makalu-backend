const express=require('express');
const package=require('../controllers/packageController')
const router=express.Router();

router.post('/create', package.createPackage);

router.get('/', package.getAllPackages);

router.get('/:id', package.getSinglePackage);

router.put('/:id', package.updatePackage);

router.delete('/:id', package.deletePackage);

module.exports=router;
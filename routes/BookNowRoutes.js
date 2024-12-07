
const express=require('express');
const BookNowController = require('../controllers/BookNowController');

const router=express.Router();

router.post('/booknow', BookNowController);


module.exports=router;
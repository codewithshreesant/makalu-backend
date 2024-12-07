
const express=require('express');
const Authorize = require('../controllers/AuthController');

const router=express.Router();

router.post('/signup', Authorize.signUp);
router.post('/login', Authorize.Login);
// router.post('/logout/:id', )

router.delete('/:id', );

module.exports=router;


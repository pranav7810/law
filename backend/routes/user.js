const express =require('express');

const {signupUser,loginUser,resetpwd}=require('../controllers/userController');
const { addLawyer, getLawyer,feedBack } = require('../controllers/lawyerController');
const { addfaq,getfaq } = require('../controllers/faqController');


const router =express.Router();

router.post('/login',loginUser);


router.post('/signup',signupUser);

router.put('/resetpwd',resetpwd)

router.post('/add-lawyer',addLawyer)

router.get('/get-lawyers',getLawyer)

router.post('/addfaq',addfaq)

router.post('/getfaq',getfaq)

router.post('/feedback',feedBack)

module.exports=router
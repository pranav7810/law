require('dotenv').config()
const { log } = require('console');
const express=require('express');
const mongoose =require('mongoose');
const userRouter =require('./routes/user')

const app=express();
app.use(express.json())



mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useNewUrlParser:true})
.then((result)=>app.listen(process.env.PORT))
.catch((err)=>log(err));

app.use('/api/user',userRouter);

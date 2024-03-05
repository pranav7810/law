const feedModel = require("../models/feedModel")
const lawyerModel = require("../models/lawyerModel")

const addLawyer = async(req,res)=>{
    const {name,experience,areaofExpertise,email}=req.body
    try{
        const lawyer=await lawyerModel.addLawyer(name,experience,areaofExpertise,email)
        res.status(200).json(lawyer)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}

const getLawyer = async(req,res)=>{
    try{
        const lawyerdata=await lawyerModel.getlawyers();
        res.status(200).json(lawyerdata)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}

const feedBack =async(req,res)=>{
    const {feed,topic,user} =req.body
    try{
        const feedBack=await feedModel.feedBack(feed,topic,user)
        res.status(200).json(feedBack)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}
module.exports={addLawyer,getLawyer,feedBack}
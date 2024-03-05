const faq =require('../models/faqModel')

const addfaq = async(req,res)=>{
    const {name,jsonArray}=req.body

    try{
        const faqdata= await faq.addfaq(name,jsonArray) 

        res.status(200).json({faqdata})
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}

const getfaq = async(req,res)=>{
    const {name}=req.body
    try{
        const faqdata= await faq.getfaq(name) 

        res.status(200).json({faqdata})
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}


module.exports={addfaq,getfaq}
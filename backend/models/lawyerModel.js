const validator=require('validator')
const mongoose=require('mongoose')

const LawyerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    experience:{
        type:Number,
        required:true
    },
    areaofExpertise:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },

})

LawyerSchema.statics.addLawyer=async function(name,experience,areaofExpertise,email){
    if(!name||!experience||!areaofExpertise||!email){
        throw Error('All fields must be filled');
    }
    const exists = await this.findOne({email})
    if (exists){
        throw Error('Email already in use')
    }
    if(validator.isAlpha(experience)){
        throw Error('Enter valid experience')
    }
    if(!validator.isAlpha(areaofExpertise)){
        throw Error('Enter valid Area of Expertise')
    }
    if(!validator.isAlpha(name)){
        throw Error('Enter Full Name')
    }
    if(!validator.isEmail(email)){
        throw Error('Enter a valid email')
    }
    const lawyer =await this.create({name,experience,areaofExpertise,email})
    return lawyer;
}

LawyerSchema.statics.getlawyers=async function(){
    const lawyerdata =await this.find({});
    // console.log(lawyerdata)
    return lawyerdata;
}

module.exports=mongoose.model("lawyers",LawyerSchema)
const mongoose=require('mongoose')

const Schema =mongoose.Schema

const feedSchema = new Schema({
    feedBack:{
        type:String,
        required:true
    },
    topic:{
        type:String,
        required:true
    },
    user:{
        type:String,
        required:true
    }
})

feedSchema.statics.feedBack=async function(feedBack,topic,user){
    feed=await this.create({feedBack,topic,user})
    return feed
}

module.exports=mongoose.model('feedBack',feedSchema) 
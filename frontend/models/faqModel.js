const mongoose=require('mongoose')

const Schema =mongoose.Schema

const faqScheme = new Schema({
    question: {
        type: String,
        required: true
      },
      answer: {
        type: String,
        required: true
      }
});

const faqDocumentSchema = new mongoose.Schema({
    name: String,
    jsonArray: [faqScheme]

  });

  faqDocumentSchema.statics.addfaq= async function(name,jsonArray){
    const faq = await this.create({name,jsonArray})

    return faq
}
faqDocumentSchema.statics.getfaq= async function(name){
  const faq = await this.findOne({name})
  console.log(faq.jsonArray)
  return faq
}

module.exports=mongoose.model('faqdata',faqDocumentSchema) 
const mongoose=require("mongoose");

const dogSchema=new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true,
      default: 1
    },
    breed: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: false  
    }
});

const Dog=mongoose.model("Dog", dogSchema);
module.exports=Dog;
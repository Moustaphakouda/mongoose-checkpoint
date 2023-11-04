import mongoose from "mongoose";
const HumanSchema = new mongoose.Schema({
    name : {type : 'string',require:true},
    age :{type:Number},
    FavoriteFood : [String]

})

// creer un model 
const Human = mongoose.model('human', HumanSchema);
export default Human ;

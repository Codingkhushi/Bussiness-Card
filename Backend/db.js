const mongoose = require("mongoose");
const { string } = require("zod");

mongoose.connect('mongodb+srv://khushi70211:PrPrOJHrFmEzwdwL@cluster0.ekpddzq.mongodb.net/BussinessCard');
// tUM4ZRpu5uJ5DyAR
// khushi70211
const cardSchema = new mongoose.Schema({
    Name : String,
    Description : String,
    SocialMediaLinks : {
        linkedIn : String,
        Twitter :String,
        Github :String,
    } ,
    Interest :String,
    //id:Number
})

const Cards = mongoose.model('card',cardSchema);
//creates a Mongoose model called card, based on the schema you defined as Cards.

module.exports = {
    Cards
}
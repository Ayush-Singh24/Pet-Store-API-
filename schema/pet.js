const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PetSchema = new Schema({
    id: ObjectId,
    nameOfPet: {type: String, required: true},
    nameOfOwner:  {type: String, required: true},
    age:  {type: Number, required: true},
    type:  {type: String, required: true},
    gender:  {type: String, required: true},
})

const PetModel = mongoose.model("Pet", PetSchema);

module.exports = {
    Pet: PetModel
}
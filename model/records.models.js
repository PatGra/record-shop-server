const mongoose = require("mongoose")
const { model, Schema } = mongoose;

const recordsSchema = new Schema({
   title: {
        require: true, 
        type: String 
    },
    artist: {
        require: true, 
        type: String 
    },
    year: {
        require: true, 
        type: String 
    },
    price: {
        require: true, 
        type: Number 
    },
    cover: {
        require: true, 
        type: String
    }
});

const Records = model('Records', recordsSchema, "records");
module.exports = Records;
const mongoose = require("mongoose")
const { model, Schema } = mongoose;

const usersSchema = new Schema({
    firstName: {
        require: true, 
        type: String 
    },
    lastName: {
        require: true, 
        type: String 
    },
    email: {
        require: true, 
        type: String 
    },
    password: {
        require: true, 
        type: String
    }
});

const Users = model('Users', usersSchema, "users");
module.exports = Users;
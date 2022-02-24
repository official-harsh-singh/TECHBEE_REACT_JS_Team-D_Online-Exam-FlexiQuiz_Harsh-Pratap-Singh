const mongoose = require('mongoose');
const { Schema } = mongoose;
// Schema for User
const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    Date: {
        type: Date,
        default: Date.now
    }
    
})
const User =  mongoose.model('user', userSchema )
User.createIndexes
module.exports = User;
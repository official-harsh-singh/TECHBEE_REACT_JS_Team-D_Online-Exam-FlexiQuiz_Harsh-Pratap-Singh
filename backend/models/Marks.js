const mongoose = require('mongoose');
const { Schema } = mongoose;

//Schema For Marks


const marksSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    name: {
        type: String,
        required: true
    },
   marks: Number
})
module.exports = mongoose.model('marks', marksSchema )
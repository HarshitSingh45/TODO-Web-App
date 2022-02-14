const mongoose = require('mongoose');
// creating schema
const reminderSchema = new mongoose.Schema({
    reminderName:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true  // you can put other validation also
    },
    time:{
        type: String,
        required: true
    }
})
// defining collection whic will store data
const Reminder = mongoose.model('Reminder', reminderSchema);
// exporting collection
module.exports = Reminder;

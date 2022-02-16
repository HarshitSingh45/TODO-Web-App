const mongoose = require('mongoose');
// creating schema
const reminderSchema = new mongoose.Schema({
    // adding different fields

    // field 1 
    reminderName:{
        type: String,
        required: true
    },
        // field 2
    category:{
        type: String,
        required: true
    },
        // field 3
    date:{
        type: String,
        required: true  
    },
        // field 4
    time:{
        type: String,
        required: true
    }
})
// defining collection which will store data
const Reminder = mongoose.model('Reminder', reminderSchema);
// exporting collection
module.exports = Reminder;

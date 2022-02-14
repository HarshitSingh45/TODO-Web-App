const Reminder = require('../models/reminder');
module.exports.insert = function(req,res){
    console.log(req.body);
    // return;
    Reminder.create({
        reminderName: req.body.reminder,
        category: req.body.category,
        date: req.body.date,
        time: req.body.time
    }, function(err, newReminder){
        if(err){
            console.log('Error in creating new reminder');
            return;
        }
        console.log('********', newReminder);
        res.redirect('back');
    });
}
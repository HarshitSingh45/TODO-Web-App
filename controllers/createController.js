const Reminder = require('../models/reminder'); // required reminder collection
module.exports.insert = function(req,res){ // exporting insert module
    // req.body contains all the entries entered by the user
    console.log(req.body);
    // new reminder will be created
    // all entries needs to be inserted
    Reminder.create({
        // all entries needs to be inserted
        reminderName: req.body.reminder,
        category: req.body.category,
        date: req.body.date,
        time: req.body.time
    }, function(err, newReminder){
        if(err){
            //  if error occured in creating the remnder, display msg and return.
            console.log('Error in creating new reminder',err);
            return;
        }
        console.log('********', newReminder);
        // if new reminder is created, then add into database and return back to home page.
        return res.redirect('back');
    });
}
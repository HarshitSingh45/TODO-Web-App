const Reminder = require('../models/reminder'); // required reminder collection
module.exports.home = function(req, res){  // exporting home module
    //  find all the reminders in database & fetch
    Reminder.find({}, function(err, allReminders){
        if(err){
            //  if error occured in fetching reminder from database
            console.log('Error in fetching reminders from database',err);
            return;
        }
        //  render home page and insert all the reminders fetched from the database and return back to home page
        return res.render('home',{
            title: 'Reminder App',
            reminders: allReminders
        });
    });
    
}

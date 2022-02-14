const Reminder = require('../models/reminder');
module.exports.home = function(req, res){
    Reminder.find({}, function(err, allReminders){
        if(err){
            console.log('Error in fetching reminders from database');
            return;
        }
        
        return res.render('home',{
            title: 'Reminder App',
            reminders: allReminders
        });
    });
    // return res.end('<h1> Express is up for todo app </h1>')
    // return res.render('home',{
        // title: 'Reminder app'
    // });
}

// you can add multiple actions

/**
 module.exports.actionName = function(req, res){ };
 */
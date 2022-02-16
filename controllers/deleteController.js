const Reminder = require('../models/reminder'); // required reminder collection
module.exports.delete = function(req, res){  //exporting delete module
    // req.bod.toDelete contains all the id's which the user selected to delete the tasks
    console.log(req.body.toDelete == null);
    if(req.body.toDelete == null){
        // if no item is selected by the user to delete the task
        console.log('No items selected to delete');
        // return back to homepage
        return res.redirect('back');
    }
    var deleteItems = req.body.toDelete;
    // if only one item is selected by the user
    if(deleteItems.length == 24){
        //  find that id and delete from db
        Reminder.findByIdAndDelete(deleteItems, function(err){
            if(err){
                //  if error occured in deleting the remnder, display msg and return.
                console.log('error in deleting reminder from database',err);
                return;
            }
            console.log('last Reminder deleted');
            // if new selected reminder is deleted, then delete from database and return back to home page.
            res.redirect('back');
        })
    }else{
        // if more than one reminder is selected to delete
        console.log(deleteItems);
        //  for loop to select one id at a time & to delete that reminder
        for(let id of deleteItems){
            //  finding the selcted id reminder
            Reminder.findByIdAndDelete(id, function(err){
            if(err){
                // if error occured in deleting reminder from db
                console.log(`Error in deleting item ${id} from db`);
                return;
            }
            // display msg if one reminder is successfully deleted
            console.log('deleted item');
            })
        }
        // return back to home page if all the selected reminders are deleted
        res.redirect('back');
    }
   
    
}
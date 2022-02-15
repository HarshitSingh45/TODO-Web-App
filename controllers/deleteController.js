const { Router } = require('express');
const Reminder = require('../models/reminder');
module.exports.delete = function(req, res){
    console.log(req.body.toDelete == null);
    if(req.body.toDelete == null){
        console.log('No items has been added to delete');
        res.redirect('back');
        return;
    }
    var deleteItems = req.body.toDelete;
    if(deleteItems.length == 24){
        Reminder.findByIdAndDelete(deleteItems, function(err){
            if(err){
                console.log('error in deleting reminder from database');
                return;
            }
            console.log('last Reminder deleted');
            res.redirect('back');
        })
    }else{
        console.log(deleteItems);
    for(let id of deleteItems){
        Reminder.findByIdAndDelete(id, function(err){
            if(err){
                console.log(`Error in deleting item ${id} from db`);
                return;
            }
            console.log('deleted item');
        })
    }
     res.redirect('back');
    }
    
}
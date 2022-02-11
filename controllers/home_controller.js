module.exports.home = function(req, res){
    // return res.end('<h1> Express is up for todo app </h1>')
    return res.render('home',{
        title: 'Reminder app'
    });
}

// you can add multiple actions

/**
 module.exports.actionName = function(req, res){ };
 */
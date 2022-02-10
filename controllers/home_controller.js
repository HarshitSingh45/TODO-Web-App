module.exports.home = function(req, res){
    return res.end('<h1> Express is up for todo app </h1>')
}

// you can add multiple actions

module.exports.harshit = function(req,res){
    return res.end('<h1> Harshit Singh</h1>')
}
/**
 module.exports.actionName = function(req, res){ };
 */
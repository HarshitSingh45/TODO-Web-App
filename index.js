const express = require('express');
// connection b/w db and server
const db= require("./config/mongoose.js"); 
// server can be accessed using name app
const app = express();
// defining port at which server will run
const port = 8000;
// ssetup express router
app.use('/', require('./routes'));

// setup view engine
app.set('view engine','ejs');
// setting up path for view engine
app.set('views','./views');
// set up assets folders to access static files like css, js images
app.use(express.static('assets'));

// checking whether server has started or not
app.listen(port,function(err){
    if(err){
        console.log(`error : ${err}`); // error printing using interpolation
        return;
    }
    console.log(`server is up and running on port: ${port}`); // printing this message if server is running
})


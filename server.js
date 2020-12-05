const express = require("express");
const app = express();

const mockUserData= [
    {name:"Ollie"},
    {name:"Kickflip"}
]

app.get('/users', function(req,res){
    res.json({
        success: true,
        message: 'successfully got users!',
        users: mockUserData
    })
});

app.listen(8000, function() {
console.log("server is running")
});


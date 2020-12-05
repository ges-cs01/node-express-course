const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const middleware = require('./middleware.js');

app.use(bodyParser.json());

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
})

app.get('/users/:id',function(req,res){
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'got one user',
        user: req.params.id
    })
})

app.post('/login', function(req,res) {
    const username = req.body.username;
    const password = req.body.password;

    const mockUsername="Jack";
    const mockPassword="Jackpass";

    if(username===mockUsername && password===mockPassword) {
        res.json({
            success: true,
            message: 'user and psswd match',
            token: 'encrypted token'
        })
    }

    else {
        res.json({
            success: false,
            message: 'user or psswd do not match'
        })
    }
})

app.put('/folder', function(req,res) {
    res.status(200);
    res.send('working');
    res.end();
})

app.get('/admin', middleware.checkToken, function(req, res){
    res.json({
        success: true,
        message: 'admin ok',
        adminData: 'sec data from db'
    })
})

app.listen(8000, function() {
console.log("server is running")
})


const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const clickController = require('./Database/Controller/clickController.js');
const mongoose = require('mongoose');

let mongoURI = 'mongodb://jerry:123@ds125623.mlab.com:25623/userevents';

mongoose.connect(mongoURI);


app.use(bodyParser.json());
app.get('/', (req,res,next) => {
    res.sendfile('./index.html');
});

app.get('/script.js',(req,res,next) =>{
    res.sendfile('./script.js');
})

app.get('/styles.css',(req,res,next) =>{
    res.sendfile('./styles.css');
})

app.post('/storeClick',(req,res,next) =>{
    clickController.createClick(req,res,next)
})

app.listen(3000, () =>{
    console.log('App listening on port 3000!');
});
const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/AlienDBex';


const app = express();

mongoose.connect(url, {useNewUrlParser:true});

const con = mongoose.connection

con.on('open', () => {
    console.log('Connected!');
})

app.use(express.json());

app.listen(9000, () => {
    console.log('Server started!');
});


// Routing URLs

const alienRouter = require('./routes/aliens.js');
app.use('/aliens', alienRouter);



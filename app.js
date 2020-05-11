const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const db = mongoose.connect('mongodb://localhost/bookAPI'); 

const book = require('./models/bookModel');
const bookRoute = require('./routes/bookRouter')(book);


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



app.use('/api',bookRoute);



const port = process.env.PORT || 3000;

app.get('/' , (req , res) => {
    res.send("Welcome to the API first");
});

app.get('/Doki' , (req , res) => {
  res.send("Welcome to the Doki");
});

app.listen(port , () => {
    console.log(`We are listening on ${port}`);
});


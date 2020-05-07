const express = require('express');
const mongoose = require('mongoose');

const app = express();
const db = mongoose.connect('mongodb://localhost/bookAPI'); 
const bookRoute = express.Router();
const book = require('./models/bookModel');


bookRoute.route('/books')
.get((req, res) => {
  book.find((err , bookks) => {
    if(err){ return res.send(err);}
    return res.json(bookks);
  })
});

app.use('/api',bookRoute);



const port = process.env.PORT || 3000;

app.get('/' , (req , res) => {
    res.send("Welcome to the API first");
});

app.listen(port , () => {
    console.log(`We are listening on ${port}`);
});


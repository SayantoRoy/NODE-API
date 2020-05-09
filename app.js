const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const db = mongoose.connect('mongodb://localhost/bookAPI'); 
const bookRoute = express.Router();
const book = require('./models/bookModel');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

bookRoute.route('/books')
.post((req , res)=>{
  const body = new book(req.body);
  body.save();
  return res.json(body);
})
.get((req, res) => {
  const query = {};
  if(req.query.genre){ query.genre = req.query.genre;}
  book.find(query , (err , bookks) => {
    if(err){ return res.send(err);}
    return res.json(bookks);
  })
});

bookRoute.route('/books/:id')
.get((req, res) => {
  
  book.findById(req.params.id, (err , bookks) => {
    if(err){ return res.send(err);}
    return res.json(bookks);
  })
});

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


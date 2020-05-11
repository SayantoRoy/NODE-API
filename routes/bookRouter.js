const express =require('express');


function routers(book)
{
    const bookRoute = express.Router();
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

return bookRoute;
};

module.exports = routers;
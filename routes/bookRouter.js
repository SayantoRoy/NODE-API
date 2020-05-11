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

bookRoute.use('/books/:id' , (req, res, next) => {
    book.findById(req.params.id, (err , bookks) => {
        if(err){ return res.send(err);}
        if(bookks){req.book = bookks; return next();}
        return res.sendStatus(404);
      });
});

bookRoute.route('/books/:id')
.get((req, res) => {
  res.json(req.book)
})
.put((req,res) => {
   const bookks = req.book;
        bookks.title = req.body.title;
        bookks.author = req.body.author;
        bookks.genre = req.body.genre;
        bookks.read = req.body.read;
        bookks.save();
        return res.json(bookks);
});

return bookRoute;
};

module.exports = routers;
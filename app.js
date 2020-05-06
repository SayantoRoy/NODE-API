const express = require('express');

const app = express();
const bookRoute = express.Router();

bookRoute.route('/books')
.get((req, res) => {
  const response = [{ Hello : "Kaise Ho BRO>??" , Nameste : "How Are YOu BRO?>?"}
                    , { Hello : "Kaise Ho BRO>??" , Nameste : "How Are YOu BRO?>?"}];
  res.json(response);
});

app.use('/api',bookRoute);


const port = process.env.PORT || 3000;

app.get('/' , (req , res) => {
    res.send("Welcome to the API first");
});

app.listen(port , () => {
    console.log(`We are listening on ${port}`);
});


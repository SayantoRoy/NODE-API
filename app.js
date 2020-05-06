const express = require('express');
const app = express();

let port = process.env.PORT || 3000;

app.get('/' ,(req ,res)=> {
    res.send("Welcome to the API first");
});

app.listen(port , ()=>{
    console.log(`We are listening on ${port}`);
})
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://borracha:borracha@cluster0-24z5f.mongodb.net/test?retryWrites=true&w=majority', {
  
    useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferCommands: false,
})

//GET, POST , PUT , DELETE

// req.query = acessar query params (para filtros)
// req.params = acessar route params (para edição e delete)
//req.body = acessar corpo da requisição 


app.use(express.json());
app.use(routes);


app.listen(3333);

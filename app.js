
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
require('./models/db.js');

var routes = require('./routes/index');

app.get('/tuma/:level',routes.getLevel)
app.get('/oil',routes.getOil)

app.listen(PORT,()=>{
    console.log(`Listening to the port ${PORT} `)
})
const express =require('express');
const adminr= require('./routes/admin');
const datar= require('./routes/data');

const app= express();
const bodyparser = require('body-parser');


app.use(bodyparser.urlencoded({extended:false}));

app.use(adminr);
app.use(datar);

app.listen(4000);


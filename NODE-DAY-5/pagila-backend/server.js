const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const adminRouter = require('./admin');
const shopRouter = require('./shop');

app.use('/admin',adminRouter);

app.use('/shop', shopRouter);


app.listen(port, () => {
    console.log('Server is Started');
});
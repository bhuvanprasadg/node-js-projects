const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const adminRouter = require('./admin');

app.use('/admin',adminRouter);


app.listen(port, () => {
    console.log('Server is Started');
});
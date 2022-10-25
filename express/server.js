const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World Express');
});

app.get('/test', (req, res) => {
    res.json([{
        message: 'Hello World Express 1',
    },
    {
        message: 'Hello World Express 2',
    }]);
});

app.post('/user', (req, res) => {
    res.send(`inside new user`);  
});

app.delete('/comment', (req, res) => {
    res.send('deleting a resource');
});

app.listen(port, () => {
    console.log(`App is listening on the port ${port}`);
});
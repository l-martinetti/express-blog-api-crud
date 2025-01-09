const posts = require('./data/posts');
const routerPosts = require('./routers/posts');
const errorHandler = require('./middlewares/errorsHandler');
const notFound = require('./middlewares/notFound');

const express = require('express');
const app = express();
const port = 3000;

// body-parser
app.use(express.json());

app.use(express.static('public'));

// router
app.use('/posts', routerPosts);

// main route
app.get('/', (req, res) => {
    res.send('Server Blog post')
});

// handlers errori
app.use(errorHandler);
app.use(notFound);

app.listen(port, () => {
    console.log('funziono')
});
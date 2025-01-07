const express = require('express');
const app = express();
const port = 3000;

const posts = require('./posts');
const routerPosts = require('./routers/posts');

app.use(express.static('public'))

app.use('/posts', routerPosts)

app.get('/', (req, res) => {
    res.send('Server Blog post')
})

app.listen(port, () => {
    console.log('funziono')
  })
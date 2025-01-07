const posts = require('../data/posts');

const index = (req, res) => {
    res.json(posts)
};

const show = (req, res) => {
    const post = posts.find( post => post.id == req.params.id)

    res.json(post)
};

const store = (req, res) => {
    res.send('aggiungo nuovo post')
};

const update = (req, res) => {
    res.send('Modifico per intero post con id: ' + req.params.id)
};
const modify = (req, res) => {
    res.send('Modifico parzialmente post con id: ' + req.params.id)
};

const destroy = (req, res) => {
    const post = posts.find( post => post.id == req.params.id);

    posts.splice(posts.indexOf(post), 1);
    console.log(posts);
    res.sendStatus(204);
};

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
};
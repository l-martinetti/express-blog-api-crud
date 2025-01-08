const posts = require('../data/posts');

const index = (req, res) => {
    let postList = posts;
    const tag = req.query.tags;

    if (tag) postList = posts.filter( post => post.tags.includes(tag))

    res.json(postList)
};

const show = (req, res) => {
    const post = posts.find( post => post.id == req.params.id)

    if (!post) {
        res.status(404)
        return res.json({
            message: 'post non trovato',
            status: 404,
            error: 'not found'
        })
    }

    res.json(post)
};

const store = (req, res) => {
    const id = posts.at(-1).id + 1;
    const newPost = {
        id,
        ...req.body
    };

    posts.push(newPost)
    res.status(201)
    res.json(posts)
};

const update = (req, res) => {
    res.send('Modifico per intero post con id: ' + req.params.id)
};

const modify = (req, res) => {
    res.send('Modifico parzialmente post con id: ' + req.params.id)
};

const destroy = (req, res) => {
    const post = posts.find( post => post.id == req.params.id);

    if (!post) {
        res.status(404)
        return res.json({
            message: 'post non trovato',
            status: 404,
            error: 'not found'
        })
    }

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
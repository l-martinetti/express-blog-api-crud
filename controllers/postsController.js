const posts = require('../posts');

const index = (req, res) => {
    res.send('Elenco post')
};

const show = (req, res) => {
    res.send('Mostro post con id: ' + req.params.id)
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
    res.send('Elimino post con id: ' + req.params.id)
};

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
};
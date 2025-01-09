const postsController = require('../controllers/postsController');
const validator = require('../middlewares/validator');

const express = require('express');
const router = express.Router();


//index
router.get('/', postsController.index);

//show
router.get('/:id', postsController.show);

//store
router.post('/', validator, postsController.store);

//update
router.put('/:id', validator, postsController.update);

//modify
router.patch('/:id', validator, postsController.modify);

//destroy
router.delete('/:id', postsController.destroy);

module.exports = router;
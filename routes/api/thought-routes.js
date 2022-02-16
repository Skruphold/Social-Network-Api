const router = require('express').Router();

const { 
    createThoughts,
    getAllThoughts, 
} = require('../../controllers/thought-controller');

router.route('/:userId').post(createThoughts);
router.route('/').get(getAllThoughts);

module.exports = router;
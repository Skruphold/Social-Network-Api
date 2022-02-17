const router = require('express').Router();

const { 
    createThoughts,
    getAllThoughts,
    getThoughtsById,
    updateThoughts,
    deleteThoughts,
} = require('../../controllers/thought-controller');

router.route('/:userId').post(createThoughts);
router.route('/').get(getAllThoughts);
router.route('/:id').get(getThoughtsById).put(updateThoughts).delete(deleteThoughts);

module.exports = router;
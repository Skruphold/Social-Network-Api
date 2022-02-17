const router = require('express').Router();

const { 
    createThoughts,
    getAllThoughts,
    getThoughtsById,
    updateThoughts,
    deleteThoughts,
    addReaction,
    deleteReaction,
} = require('../../controllers/thought-controller');

router.route('/:userId').post(createThoughts);
router.route('/').get(getAllThoughts);
router.route('/:id').get(getThoughtsById).put(updateThoughts).delete(deleteThoughts);
router.route('/:thoughtId/reactions').post(addReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;
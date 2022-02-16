const router = require('express').Router();

const {
    createUsers,
    getAllUsers,
    getUsersById,
    updateUsers,
} = require('../../controllers/user-controller');

router.route('/').get(getAllUsers).post(createUsers);
router.route('/:id').get(getUsersById).put(updateUsers)

module.exports = router; 
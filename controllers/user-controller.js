const { User } = require('../models');

const userController = {
    createUsers({body}, res) {
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.status(400).json(err));
    },

    getAllUsers(req, res) {
        User.find({})
        .select('-__v')
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    },

    getUsersById({params}, res) {
        User.findOne({_id: params.id })
        .select('-__v')
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({message: 'No User with this particular ID!'});
                return; 
            }
            res.json(dbUserData)
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
    },

    updateUsers({params, body}, res) {
        User.findOneAndUpdate({_id: params.id}, body, {new: true, runValidators: true})
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({message: 'No User with this particular ID!'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err))
    },
}

module.exports = userController; 
const {Thought, User} = require('../models');

const thoughtController = {

    createThoughts({params, body}, res) {
        Thought.create(body)
        .then(({_id}) => {
            return User.findOneAndUpdate({ _id: params.userId}, {$push: {thoughts: _id}}, {new: true});
        })
        .then(dbThoughtData => {
            if(!dbThoughtData) {
                res.status(404).json({message: 'No thoughts with this particular ID!'});
                return;
            }
            res.json(dbThoughtData)
        })
        .catch(err => res.json(err)); 
    },

    getAllThoughts(req,res) {
        Thought.find({})
        .select('-__v')
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    },

    getThoughtsById({params}, res) {
        Thought.findOne({ _id: params.id })
        .select('-__v')
        .then(dbThoughtData => {
            if(!dbThoughtData) {
            res.status(404).json({message: 'No thoughts with this particular ID!'});
            return;
        }
        res.json(dbThoughtData)
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },

    updateThoughts({params, body}, res) {
        Thought.findOneAndUpdate({_id: params.id}, body, {new: true, runValidators: true})
        .select('-___v')
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({message: 'No thoughts with this particular ID!'});
                return;
            }
                res.json(dbThoughtData);
        })
        .catch(err => res.json(err));
    },

    deleteThoughts({params}, res) {
        Thought.findOneAndDelete({_id: params.id})
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({message: 'No thoughts with this particular ID!'});
                return;
            }
            res.json(dbThoughtData);
            })
            .catch(err => res.status(400).json(err));
    },
};

module.exports = thoughtController;
const { User, Thought } = require('../models');

User.deleteMany({});
Thought.deleteMany({});

const users = [{ username: "hunter", email: "hunter@test.com", thoughts: [], friends: [] }, { username: "hunter2", email: "hunter2@test.com", thoughts: [], friends: [] }, { username: "hunter3", email: "hunter3@test.com" }];
const thoughts = [{ username: "hunter1", thoughtText: "1st hunter" }, { username: "hunter2", thoughtText: "second hunter" }, { username: "hunter3", thoughtText: "third hunter" }]

User.collection.insertMany(users);
Thought.collection.insertMany(thoughts);

console.table(users);
console.table(thoughts);
console.info('Seeded database');
process.exit(0);
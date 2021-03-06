var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
    name: { type: String },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
let Users = mongoose.model('users', userSchema);

// make this available to our users in our Node applications
module.exports = Users;

const mongoose = require('../../database');
const schema = mongoose.Schema;

const CONSTANT = require('../utils/constant');

const UserSchema = new schema({
    name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }

})


module.exports = mongoose.model(CONSTANT.COLLECTION.USER, UserSchema)
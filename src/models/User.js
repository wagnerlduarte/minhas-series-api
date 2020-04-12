const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    identifier: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

UserSchema.set('toJSON', {
    virtuals: true
});

mongoose.model('User', UserSchema);
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const SerieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    comments: {
        type: String,
        required: false
    },
    rate: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

SerieSchema.plugin(mongoosePaginate);

SerieSchema.set('toJSON', {
    virtuals: true
});

mongoose.model('Serie', SerieSchema);
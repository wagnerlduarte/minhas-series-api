const mongoose = require('../database');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

ProductSchema.plugin(mongoosePaginate);

ProductSchema.set('toJSON', {
    virtuals: true
});

mongoose.model('Product', ProductSchema);
const mongoose = require("../database");

const Product = mongoose.model('Product');

module.exports = {
    async list(req, res) {
        const { page = 1 } = req.query;

        const products = await Product.paginate({}, { page: page, limit: 10 });

        return res.json(products);
    },

    async get(req, res) {
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(product);
    },

    async delete(req, res) {
        await Product.findByIdAndDelete(req.params.id);

        return res.send();
    },

    async create(req, res) {
        const product = await Product.create(req.body);

        return res.json(product);
    }
};
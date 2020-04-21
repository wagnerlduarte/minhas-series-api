const mongoose = require('../../database')

const Serie = mongoose.model('Serie')

module.exports = {
    async list(req, res) {
        const { page = 1, limit = 10, genre, rate } = req.query

        let filters = { user: req.userId }

        if (genre != undefined) filters.genre = genre

        if (rate != undefined) filters.rate = rate

        const series = await Serie.paginate(filters, { page, limit })

        return res.json(series)
    },

    async get(req, res) {
        const serie = await Serie.findOne({
            _id: req.params.id,
            user: req.userId,
        })

        return res.json(serie)
    },

    async update(req, res) {
        const serie = await Serie.findOneAndUpdate(
            {
                _id: req.params.id,
                user: req.userId,
            },
            req.body,
            {
                new: true,
            }
        )

        return res.json(serie)
    },

    async delete(req, res) {
        await Serie.findOneAndDelete({
            _id: req.params.id,
            user: req.userId,
        })

        return res.send()
    },

    async create(req, res) {
        const serie = await Serie.create({ ...req.body, user: req.userId })

        return res.json(serie)
    },
}

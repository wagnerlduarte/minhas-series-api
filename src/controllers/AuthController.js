const mongoose = require('../database')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const authConfig = require('../config/auth')

const User = mongoose.model('User')

module.exports = {
    async register(req, res) {
        const { identifier, password } = req.body

        try {
            if (await User.findOne({ identifier })) {
                return res.status(400).send({ error: 'User already exists' })
            }

            const user = await User.create({ identifier, password })

            user.password = undefined

            return res.send({ user })
        } catch (err) {
            return res
                .status(400)
                .send({ error: 'Registration failed: ' + err })
        }
    },

    async login(req, res) {
        const { identifier, password } = req.body

        const user = await User.findOne({ identifier }).select('+password')

        if (!user) return res.status(400).send({ error: 'User not found' })

        if (!(await bcrypt.compare(password, user.password)))
            return res.status(400).send({ error: 'Invalid password' })

        user.password = undefined

        const token = jwt.sign({ id: user.id }, authConfig.secret, {
            expiresIn: 86400,
        })

        return res.json({
            jwt: token,
            user: user,
        })
    },
}

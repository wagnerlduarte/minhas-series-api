const nodemailer = require('nodemailer')
const hbs = require('nodemailer-express-handlebars')
const path = require('path')

const { host, port, user, pass } = require('../config/mail')

const transport = nodemailer.createTransport({
    host,
    port,
    auth: { user, pass },
})

const viewPath = path.resolve('./src/resources/mail/')

transport.use(
    'compile',
    hbs({
        viewEngine: {
            layoutsDir: path.resolve(viewPath, 'layouts'),
            partialsDir: path.resolve(viewPath, 'partials'),
            defaultLayout: 'default',
            extname: '.hbs',
        },
        viewPath,
        extName: '.hbs',
    })
)

module.exports = transport

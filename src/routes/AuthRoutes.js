const AuthController = require('../controllers/AuthController')

module.exports = (routes) => {
    routes.post('/login', AuthController.login)
}
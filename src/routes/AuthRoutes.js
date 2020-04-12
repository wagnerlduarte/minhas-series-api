const AuthController = require('../controllers/AuthController')

module.exports = (routes) => {
    routes.post('/register', AuthController.register)
    routes.post('/login', AuthController.login)
}
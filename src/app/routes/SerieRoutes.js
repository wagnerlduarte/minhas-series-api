const SerieController = require('../controllers/SerieController')
const authMiddleware = require('../middlewares/auth')

module.exports = (routes) => {
    // routes.use(authMiddleware)

    routes.get('/series', SerieController.list)
    routes.get('/serie/:id', SerieController.get)
    routes.delete('/serie/:id', SerieController.delete)
    routes.put('/serie/:id', SerieController.update)
    routes.post('/serie', SerieController.create)
}

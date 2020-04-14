const ProductController = require('../controllers/ProductController')

module.exports = (routes) => {
    routes.get('/products', ProductController.list)
    routes.get('/product/:id', ProductController.get)
    routes.put('/product/:id', ProductController.update)
    routes.delete('/product/:id', ProductController.delete)
    routes.post('/product', ProductController.create)
}

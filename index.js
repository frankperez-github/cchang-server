const jsonServer = require('json-server')
const clone = require('clone') 
const data = require('./db.json')

const isProductionEnv = process.env.NODE_ENV === 'development';
const server = jsonServer.create()

const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use((req, res, next) => {
    if (req.path !== '/')
        router.db.setState(router.db)
    next()
})

server.use(router)
server.listen(process.env.PORT || 8000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server